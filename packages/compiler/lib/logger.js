let log = (log_type, dmc_module, msg) => {
  console.log(log_type, dmc_module + ':', msg);
};

let warning = (dmc_module, msg) => { log('[WARNING]', dmc_module, msg); };
let error = (dmc_module, msg) => { log('[ERROR]', dmc_module, msg); };
let info = (dmc_module, msg) => { log('[INFO]', dmc_module, msg); } ;

module.exports = { error, warning, info };
