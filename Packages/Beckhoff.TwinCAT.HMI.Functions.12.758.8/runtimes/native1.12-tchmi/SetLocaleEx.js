var TcHmi;!function(TcHmi){!function(Functions){!function(Beckhoff){Beckhoff.SetLocaleEx=function(ctx,locale){if(!ctx)throw new TypeError("Parameter 'ctx' must be defined.");if(!ctx.success||!ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are missing.");if("function"!=typeof ctx.success||"function"!=typeof ctx.error)throw new TypeError("Parameter 'ctx' must be defined properly. Either 'success' or 'error' or both are not of type 'function'.");TcHmi.Locale.load(locale,data=>data.error?void ctx.error(data.error,{code:data.error,message:TcHmi.Errors[data.error],reason:"Function: TcHmi.Functions.Beckhoff.SetLocaleEx",domain:"Function",errors:data.details?[data.details]:void 0}):void ctx.success())}}(Functions.Beckhoff||(Functions.Beckhoff={}))}(TcHmi.Functions||(TcHmi.Functions={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("SetLocaleEx","TcHmi.Functions.Beckhoff",TcHmi.Functions.Beckhoff.SetLocaleEx);