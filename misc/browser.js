const { ErrorType, immediateError } = require("immediate-error")

immediateError("LoLite doesn't have browser support.", ErrorType.BaseError)