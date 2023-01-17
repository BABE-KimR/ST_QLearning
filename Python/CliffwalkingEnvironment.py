import os
import pyads
import gymgrid 
import numpy as np
import gym
import random 
print(os.environ['CONDA_DEFAULT_ENV'])
print("Environment started")

# connect to plc and open connection
plc = pyads.Connection('127.0.0.1.1.1', pyads.PORT_TC3PLC1)
plc.open()

""" Start environment here"""
env = gym.make('CliffWalking-v0', render_mode="human")

state = env.reset()

print("state:", state)

# Notify PLC environment is ready to go
plc.write_by_name("MAIN.FB_Env1.bStartProxyOK", True)

'''
    Environment reset requested
'''
_bEnvResetRequested = plc.get_symbol('MAIN.FB_Env1._bEnvResetRequested')
processReset = False
def EnvResetCb(notification, data):
    handle, timestamp, value = plc.parse_notification(notification, pyads.PLCTYPE_BOOL)
    if value:
        global processReset
        processReset = True

_bEnvResetRequested.add_device_notification(EnvResetCb)

'''
    Environment step requested
'''
_bEnvStepRequested = plc.get_symbol('MAIN.FB_Env1._bEnvStepRequested')
processStep = False
def EnvStepCb(notification, data):
    handle, timestamp, value = plc.parse_notification(notification, pyads.PLCTYPE_BOOL)
    if value:
        global processStep
        processStep = True

_bEnvStepRequested.add_device_notification(EnvStepCb)

"""
    Environment stop request
"""
_bStopEnvironmentRequested = plc.get_symbol('MAIN.FB_Env1._bStopEnvironmentRequested')
processStop = False
def EnvStopCb(notification, data):
    handle, timestamp, value = plc.parse_notification(notification, pyads.PLCTYPE_BOOL)
    if value:
        global processStop
        processStop = True

_bStopEnvironmentRequested.add_device_notification(EnvStopCb)

""" Here the environment should be explored/exploited"""
while True:
    if processReset:
        processReset = False
        state = env.reset()
        write_dict = {'MAIN.FB_Env1.state': state, 'MAIN.FB_Env1.bResetEnvironmentOK': True}
        plc.write_list_by_name(write_dict)

    if processStep:
        processStep = False
        print("Executing action")
        _actionToTake = plc.read_by_name("MAIN.FB_Env1._actionToTake")
        newState, reward, done, info = env.step(_actionToTake)
        print(newState,reward, done, info )
        write_dict = {'MAIN.FB_Env1.newState': newState, 'MAIN.FB_Env1.reward': reward, 'MAIN.FB_Env1.done': done ,"MAIN.FB_Env1.bEnvStepRequestedOK" :True}
        plc.write_list_by_name(write_dict)

    if processStop:
        print("PLC signaled max episodes have been reached")
        env.close()
        # close connection
        plc.close()
        print("Environment & ADS communication stopped")
        input("wait")
        break
    





