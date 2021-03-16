import logger from "./logger"
import thunk from "redux-thunk"
import comments from "./comments"
import {applyMiddleware} from "redux"

export default applyMiddleware(thunk, logger, comments)