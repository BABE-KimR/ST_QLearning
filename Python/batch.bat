@echo off
REM This will start the reinforcement-learning environment
call C:\Users\BramS\Anaconda3\Scripts\activate.bat RL-PLC
REM This will start our environment that our PLC will try to communicate with
python CliffwalkingEnvironment.py


