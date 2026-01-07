const { ErrorType, immediateError } = require("immediate-error")

immediateError("LoLite doesn't have a CLI yet.", ErrorType.BaseError)