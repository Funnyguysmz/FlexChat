/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const protocol = $root.protocol = (() => {

    /**
     * Namespace protocol.
     * @exports protocol
     * @namespace
     */
    const protocol = {};

    /**
     * SessionType enum.
     * @name protocol.SessionType
     * @enum {number}
     * @property {number} ST_UnKnow=0 ST_UnKnow value
     * @property {number} ST_Single=1 ST_Single value
     * @property {number} ST_Group=2 ST_Group value
     */
    protocol.SessionType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ST_UnKnow"] = 0;
        values[valuesById[1] = "ST_Single"] = 1;
        values[valuesById[2] = "ST_Group"] = 2;
        return values;
    })();

    /**
     * MessageType enum.
     * @name protocol.MessageType
     * @enum {number}
     * @property {number} MT_UnKnow=0 MT_UnKnow value
     * @property {number} MT_Text=1 MT_Text value
     * @property {number} MT_Picture=2 MT_Picture value
     * @property {number} MT_Voice=3 MT_Voice value
     */
    protocol.MessageType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "MT_UnKnow"] = 0;
        values[valuesById[1] = "MT_Text"] = 1;
        values[valuesById[2] = "MT_Picture"] = 2;
        values[valuesById[3] = "MT_Voice"] = 3;
        return values;
    })();

    /**
     * ACKType enum.
     * @name protocol.ACKType
     * @enum {number}
     * @property {number} AT_UnKnow=0 AT_UnKnow value
     * @property {number} AT_Up=1 AT_Up value
     * @property {number} AT_Push=2 AT_Push value
     * @property {number} AT_Login=3 AT_Login value
     */
    protocol.ACKType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AT_UnKnow"] = 0;
        values[valuesById[1] = "AT_Up"] = 1;
        values[valuesById[2] = "AT_Push"] = 2;
        values[valuesById[3] = "AT_Login"] = 3;
        return values;
    })();

    /**
     * CmdType enum.
     * @name protocol.CmdType
     * @enum {number}
     * @property {number} CT_UnKnow=0 CT_UnKnow value
     * @property {number} CT_Login=1 CT_Login value
     * @property {number} CT_Heartbeat=2 CT_Heartbeat value
     * @property {number} CT_Message=3 CT_Message value
     * @property {number} CT_ACK=4 CT_ACK value
     * @property {number} CT_Sync=5 CT_Sync value
     */
    protocol.CmdType = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CT_UnKnow"] = 0;
        values[valuesById[1] = "CT_Login"] = 1;
        values[valuesById[2] = "CT_Heartbeat"] = 2;
        values[valuesById[3] = "CT_Message"] = 3;
        values[valuesById[4] = "CT_ACK"] = 4;
        values[valuesById[5] = "CT_Sync"] = 5;
        return values;
    })();

    protocol.Input = (function() {

        /**
         * Properties of an Input.
         * @memberof protocol
         * @interface IInput
         * @property {protocol.CmdType|null} [type] Input type
         * @property {Uint8Array|null} [data] Input data
         */

        /**
         * Constructs a new Input.
         * @memberof protocol
         * @classdesc Represents an Input.
         * @implements IInput
         * @constructor
         * @param {protocol.IInput=} [properties] Properties to set
         */
        function Input(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Input type.
         * @member {protocol.CmdType} type
         * @memberof protocol.Input
         * @instance
         */
        Input.prototype.type = 0;

        /**
         * Input data.
         * @member {Uint8Array} data
         * @memberof protocol.Input
         * @instance
         */
        Input.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Input instance using the specified properties.
         * @function create
         * @memberof protocol.Input
         * @static
         * @param {protocol.IInput=} [properties] Properties to set
         * @returns {protocol.Input} Input instance
         */
        Input.create = function create(properties) {
            return new Input(properties);
        };

        /**
         * Encodes the specified Input message. Does not implicitly {@link protocol.Input.verify|verify} messages.
         * @function encode
         * @memberof protocol.Input
         * @static
         * @param {protocol.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link protocol.Input.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Input
         * @static
         * @param {protocol.IInput} message Input message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Input.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Input();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Input
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Input} Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Input.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Input message.
         * @function verify
         * @memberof protocol.Input
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Input.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Input
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Input} Input
         */
        Input.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Input)
                return object;
            let message = new $root.protocol.Input();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "CT_UnKnow":
            case 0:
                message.type = 0;
                break;
            case "CT_Login":
            case 1:
                message.type = 1;
                break;
            case "CT_Heartbeat":
            case 2:
                message.type = 2;
                break;
            case "CT_Message":
            case 3:
                message.type = 3;
                break;
            case "CT_ACK":
            case 4:
                message.type = 4;
                break;
            case "CT_Sync":
            case 5:
                message.type = 5;
                break;
            }
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Input
         * @static
         * @param {protocol.Input} message Input
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Input.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "CT_UnKnow" : 0;
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.protocol.CmdType[message.type] === undefined ? message.type : $root.protocol.CmdType[message.type] : message.type;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Input to JSON.
         * @function toJSON
         * @memberof protocol.Input
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Input.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Input
         * @function getTypeUrl
         * @memberof protocol.Input
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Input.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Input";
        };

        return Input;
    })();

    protocol.Output = (function() {

        /**
         * Properties of an Output.
         * @memberof protocol
         * @interface IOutput
         * @property {protocol.CmdType|null} [type] Output type
         * @property {number|null} [code] Output code
         * @property {string|null} [codeMsg] Output codeMsg
         * @property {Uint8Array|null} [data] Output data
         */

        /**
         * Constructs a new Output.
         * @memberof protocol
         * @classdesc Represents an Output.
         * @implements IOutput
         * @constructor
         * @param {protocol.IOutput=} [properties] Properties to set
         */
        function Output(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Output type.
         * @member {protocol.CmdType} type
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.type = 0;

        /**
         * Output code.
         * @member {number} code
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.code = 0;

        /**
         * Output codeMsg.
         * @member {string} codeMsg
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.codeMsg = "";

        /**
         * Output data.
         * @member {Uint8Array} data
         * @memberof protocol.Output
         * @instance
         */
        Output.prototype.data = $util.newBuffer([]);

        /**
         * Creates a new Output instance using the specified properties.
         * @function create
         * @memberof protocol.Output
         * @static
         * @param {protocol.IOutput=} [properties] Properties to set
         * @returns {protocol.Output} Output instance
         */
        Output.create = function create(properties) {
            return new Output(properties);
        };

        /**
         * Encodes the specified Output message. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @function encode
         * @memberof protocol.Output
         * @static
         * @param {protocol.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.codeMsg != null && Object.hasOwnProperty.call(message, "codeMsg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.codeMsg);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
            return writer;
        };

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Output
         * @static
         * @param {protocol.IOutput} message Output message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Output.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Output();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.code = reader.int32();
                        break;
                    }
                case 3: {
                        message.codeMsg = reader.string();
                        break;
                    }
                case 4: {
                        message.data = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Output
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Output} Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Output.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Output message.
         * @function verify
         * @memberof protocol.Output
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Output.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.codeMsg != null && message.hasOwnProperty("codeMsg"))
                if (!$util.isString(message.codeMsg))
                    return "codeMsg: string expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            return null;
        };

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Output
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Output} Output
         */
        Output.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Output)
                return object;
            let message = new $root.protocol.Output();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "CT_UnKnow":
            case 0:
                message.type = 0;
                break;
            case "CT_Login":
            case 1:
                message.type = 1;
                break;
            case "CT_Heartbeat":
            case 2:
                message.type = 2;
                break;
            case "CT_Message":
            case 3:
                message.type = 3;
                break;
            case "CT_ACK":
            case 4:
                message.type = 4;
                break;
            case "CT_Sync":
            case 5:
                message.type = 5;
                break;
            }
            if (object.code != null)
                message.code = object.code | 0;
            if (object.codeMsg != null)
                message.codeMsg = String(object.codeMsg);
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length >= 0)
                    message.data = object.data;
            return message;
        };

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Output
         * @static
         * @param {protocol.Output} message Output
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Output.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "CT_UnKnow" : 0;
                object.code = 0;
                object.codeMsg = "";
                if (options.bytes === String)
                    object.data = "";
                else {
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.protocol.CmdType[message.type] === undefined ? message.type : $root.protocol.CmdType[message.type] : message.type;
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.codeMsg != null && message.hasOwnProperty("codeMsg"))
                object.codeMsg = message.codeMsg;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            return object;
        };

        /**
         * Converts this Output to JSON.
         * @function toJSON
         * @memberof protocol.Output
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Output.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Output
         * @function getTypeUrl
         * @memberof protocol.Output
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Output.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Output";
        };

        return Output;
    })();

    protocol.OutputBatch = (function() {

        /**
         * Properties of an OutputBatch.
         * @memberof protocol
         * @interface IOutputBatch
         * @property {Array.<Uint8Array>|null} [outputs] OutputBatch outputs
         */

        /**
         * Constructs a new OutputBatch.
         * @memberof protocol
         * @classdesc Represents an OutputBatch.
         * @implements IOutputBatch
         * @constructor
         * @param {protocol.IOutputBatch=} [properties] Properties to set
         */
        function OutputBatch(properties) {
            this.outputs = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputBatch outputs.
         * @member {Array.<Uint8Array>} outputs
         * @memberof protocol.OutputBatch
         * @instance
         */
        OutputBatch.prototype.outputs = $util.emptyArray;

        /**
         * Creates a new OutputBatch instance using the specified properties.
         * @function create
         * @memberof protocol.OutputBatch
         * @static
         * @param {protocol.IOutputBatch=} [properties] Properties to set
         * @returns {protocol.OutputBatch} OutputBatch instance
         */
        OutputBatch.create = function create(properties) {
            return new OutputBatch(properties);
        };

        /**
         * Encodes the specified OutputBatch message. Does not implicitly {@link protocol.OutputBatch.verify|verify} messages.
         * @function encode
         * @memberof protocol.OutputBatch
         * @static
         * @param {protocol.IOutputBatch} message OutputBatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputBatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.outputs != null && message.outputs.length)
                for (let i = 0; i < message.outputs.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.outputs[i]);
            return writer;
        };

        /**
         * Encodes the specified OutputBatch message, length delimited. Does not implicitly {@link protocol.OutputBatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.OutputBatch
         * @static
         * @param {protocol.IOutputBatch} message OutputBatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputBatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputBatch message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.OutputBatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.OutputBatch} OutputBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputBatch.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.OutputBatch();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.outputs && message.outputs.length))
                            message.outputs = [];
                        message.outputs.push(reader.bytes());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputBatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.OutputBatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.OutputBatch} OutputBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputBatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputBatch message.
         * @function verify
         * @memberof protocol.OutputBatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputBatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.outputs != null && message.hasOwnProperty("outputs")) {
                if (!Array.isArray(message.outputs))
                    return "outputs: array expected";
                for (let i = 0; i < message.outputs.length; ++i)
                    if (!(message.outputs[i] && typeof message.outputs[i].length === "number" || $util.isString(message.outputs[i])))
                        return "outputs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates an OutputBatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.OutputBatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.OutputBatch} OutputBatch
         */
        OutputBatch.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.OutputBatch)
                return object;
            let message = new $root.protocol.OutputBatch();
            if (object.outputs) {
                if (!Array.isArray(object.outputs))
                    throw TypeError(".protocol.OutputBatch.outputs: array expected");
                message.outputs = [];
                for (let i = 0; i < object.outputs.length; ++i)
                    if (typeof object.outputs[i] === "string")
                        $util.base64.decode(object.outputs[i], message.outputs[i] = $util.newBuffer($util.base64.length(object.outputs[i])), 0);
                    else if (object.outputs[i].length >= 0)
                        message.outputs[i] = object.outputs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputBatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.OutputBatch
         * @static
         * @param {protocol.OutputBatch} message OutputBatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputBatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.outputs = [];
            if (message.outputs && message.outputs.length) {
                object.outputs = [];
                for (let j = 0; j < message.outputs.length; ++j)
                    object.outputs[j] = options.bytes === String ? $util.base64.encode(message.outputs[j], 0, message.outputs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.outputs[j]) : message.outputs[j];
            }
            return object;
        };

        /**
         * Converts this OutputBatch to JSON.
         * @function toJSON
         * @memberof protocol.OutputBatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputBatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for OutputBatch
         * @function getTypeUrl
         * @memberof protocol.OutputBatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        OutputBatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.OutputBatch";
        };

        return OutputBatch;
    })();

    protocol.LoginMsg = (function() {

        /**
         * Properties of a LoginMsg.
         * @memberof protocol
         * @interface ILoginMsg
         * @property {Uint8Array|null} [token] LoginMsg token
         */

        /**
         * Constructs a new LoginMsg.
         * @memberof protocol
         * @classdesc Represents a LoginMsg.
         * @implements ILoginMsg
         * @constructor
         * @param {protocol.ILoginMsg=} [properties] Properties to set
         */
        function LoginMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginMsg token.
         * @member {Uint8Array} token
         * @memberof protocol.LoginMsg
         * @instance
         */
        LoginMsg.prototype.token = $util.newBuffer([]);

        /**
         * Creates a new LoginMsg instance using the specified properties.
         * @function create
         * @memberof protocol.LoginMsg
         * @static
         * @param {protocol.ILoginMsg=} [properties] Properties to set
         * @returns {protocol.LoginMsg} LoginMsg instance
         */
        LoginMsg.create = function create(properties) {
            return new LoginMsg(properties);
        };

        /**
         * Encodes the specified LoginMsg message. Does not implicitly {@link protocol.LoginMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.LoginMsg
         * @static
         * @param {protocol.ILoginMsg} message LoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.token);
            return writer;
        };

        /**
         * Encodes the specified LoginMsg message, length delimited. Does not implicitly {@link protocol.LoginMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.LoginMsg
         * @static
         * @param {protocol.ILoginMsg} message LoginMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.LoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.LoginMsg} LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.LoginMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.token = reader.bytes();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.LoginMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.LoginMsg} LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginMsg message.
         * @function verify
         * @memberof protocol.LoginMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                    return "token: buffer expected";
            return null;
        };

        /**
         * Creates a LoginMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.LoginMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.LoginMsg} LoginMsg
         */
        LoginMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.LoginMsg)
                return object;
            let message = new $root.protocol.LoginMsg();
            if (object.token != null)
                if (typeof object.token === "string")
                    $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                else if (object.token.length >= 0)
                    message.token = object.token;
            return message;
        };

        /**
         * Creates a plain object from a LoginMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.LoginMsg
         * @static
         * @param {protocol.LoginMsg} message LoginMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if (options.bytes === String)
                    object.token = "";
                else {
                    object.token = [];
                    if (options.bytes !== Array)
                        object.token = $util.newBuffer(object.token);
                }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
            return object;
        };

        /**
         * Converts this LoginMsg to JSON.
         * @function toJSON
         * @memberof protocol.LoginMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LoginMsg
         * @function getTypeUrl
         * @memberof protocol.LoginMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LoginMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.LoginMsg";
        };

        return LoginMsg;
    })();

    protocol.HeartbeatMsg = (function() {

        /**
         * Properties of a HeartbeatMsg.
         * @memberof protocol
         * @interface IHeartbeatMsg
         */

        /**
         * Constructs a new HeartbeatMsg.
         * @memberof protocol
         * @classdesc Represents a HeartbeatMsg.
         * @implements IHeartbeatMsg
         * @constructor
         * @param {protocol.IHeartbeatMsg=} [properties] Properties to set
         */
        function HeartbeatMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new HeartbeatMsg instance using the specified properties.
         * @function create
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {protocol.IHeartbeatMsg=} [properties] Properties to set
         * @returns {protocol.HeartbeatMsg} HeartbeatMsg instance
         */
        HeartbeatMsg.create = function create(properties) {
            return new HeartbeatMsg(properties);
        };

        /**
         * Encodes the specified HeartbeatMsg message. Does not implicitly {@link protocol.HeartbeatMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {protocol.IHeartbeatMsg} message HeartbeatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified HeartbeatMsg message, length delimited. Does not implicitly {@link protocol.HeartbeatMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {protocol.IHeartbeatMsg} message HeartbeatMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartbeatMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartbeatMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.HeartbeatMsg} HeartbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.HeartbeatMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a HeartbeatMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.HeartbeatMsg} HeartbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartbeatMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartbeatMsg message.
         * @function verify
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartbeatMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a HeartbeatMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.HeartbeatMsg} HeartbeatMsg
         */
        HeartbeatMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.HeartbeatMsg)
                return object;
            return new $root.protocol.HeartbeatMsg();
        };

        /**
         * Creates a plain object from a HeartbeatMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {protocol.HeartbeatMsg} message HeartbeatMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartbeatMsg.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this HeartbeatMsg to JSON.
         * @function toJSON
         * @memberof protocol.HeartbeatMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartbeatMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HeartbeatMsg
         * @function getTypeUrl
         * @memberof protocol.HeartbeatMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HeartbeatMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.HeartbeatMsg";
        };

        return HeartbeatMsg;
    })();

    protocol.UpMsg = (function() {

        /**
         * Properties of an UpMsg.
         * @memberof protocol
         * @interface IUpMsg
         * @property {protocol.IMessage|null} [msg] UpMsg msg
         * @property {number|Long|null} [clientId] UpMsg clientId
         */

        /**
         * Constructs a new UpMsg.
         * @memberof protocol
         * @classdesc Represents an UpMsg.
         * @implements IUpMsg
         * @constructor
         * @param {protocol.IUpMsg=} [properties] Properties to set
         */
        function UpMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpMsg msg.
         * @member {protocol.IMessage|null|undefined} msg
         * @memberof protocol.UpMsg
         * @instance
         */
        UpMsg.prototype.msg = null;

        /**
         * UpMsg clientId.
         * @member {number|Long} clientId
         * @memberof protocol.UpMsg
         * @instance
         */
        UpMsg.prototype.clientId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpMsg instance using the specified properties.
         * @function create
         * @memberof protocol.UpMsg
         * @static
         * @param {protocol.IUpMsg=} [properties] Properties to set
         * @returns {protocol.UpMsg} UpMsg instance
         */
        UpMsg.create = function create(properties) {
            return new UpMsg(properties);
        };

        /**
         * Encodes the specified UpMsg message. Does not implicitly {@link protocol.UpMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.UpMsg
         * @static
         * @param {protocol.IUpMsg} message UpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.protocol.Message.encode(message.msg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified UpMsg message, length delimited. Does not implicitly {@link protocol.UpMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.UpMsg
         * @static
         * @param {protocol.IUpMsg} message UpMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.UpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.UpMsg} UpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.UpMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = $root.protocol.Message.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.clientId = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.UpMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.UpMsg} UpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpMsg message.
         * @function verify
         * @memberof protocol.UpMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                let error = $root.protocol.Message.verify(message.msg);
                if (error)
                    return "msg." + error;
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId) && !(message.clientId && $util.isInteger(message.clientId.low) && $util.isInteger(message.clientId.high)))
                    return "clientId: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.UpMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.UpMsg} UpMsg
         */
        UpMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.UpMsg)
                return object;
            let message = new $root.protocol.UpMsg();
            if (object.msg != null) {
                if (typeof object.msg !== "object")
                    throw TypeError(".protocol.UpMsg.msg: object expected");
                message.msg = $root.protocol.Message.fromObject(object.msg);
            }
            if (object.clientId != null)
                if ($util.Long)
                    (message.clientId = $util.Long.fromValue(object.clientId)).unsigned = false;
                else if (typeof object.clientId === "string")
                    message.clientId = parseInt(object.clientId, 10);
                else if (typeof object.clientId === "number")
                    message.clientId = object.clientId;
                else if (typeof object.clientId === "object")
                    message.clientId = new $util.LongBits(object.clientId.low >>> 0, object.clientId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.UpMsg
         * @static
         * @param {protocol.UpMsg} message UpMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.msg = null;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.clientId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientId = options.longs === String ? "0" : 0;
            }
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = $root.protocol.Message.toObject(message.msg, options);
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (typeof message.clientId === "number")
                    object.clientId = options.longs === String ? String(message.clientId) : message.clientId;
                else
                    object.clientId = options.longs === String ? $util.Long.prototype.toString.call(message.clientId) : options.longs === Number ? new $util.LongBits(message.clientId.low >>> 0, message.clientId.high >>> 0).toNumber() : message.clientId;
            return object;
        };

        /**
         * Converts this UpMsg to JSON.
         * @function toJSON
         * @memberof protocol.UpMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UpMsg
         * @function getTypeUrl
         * @memberof protocol.UpMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UpMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.UpMsg";
        };

        return UpMsg;
    })();

    protocol.PushMsg = (function() {

        /**
         * Properties of a PushMsg.
         * @memberof protocol
         * @interface IPushMsg
         * @property {protocol.IMessage|null} [msg] PushMsg msg
         */

        /**
         * Constructs a new PushMsg.
         * @memberof protocol
         * @classdesc Represents a PushMsg.
         * @implements IPushMsg
         * @constructor
         * @param {protocol.IPushMsg=} [properties] Properties to set
         */
        function PushMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PushMsg msg.
         * @member {protocol.IMessage|null|undefined} msg
         * @memberof protocol.PushMsg
         * @instance
         */
        PushMsg.prototype.msg = null;

        /**
         * Creates a new PushMsg instance using the specified properties.
         * @function create
         * @memberof protocol.PushMsg
         * @static
         * @param {protocol.IPushMsg=} [properties] Properties to set
         * @returns {protocol.PushMsg} PushMsg instance
         */
        PushMsg.create = function create(properties) {
            return new PushMsg(properties);
        };

        /**
         * Encodes the specified PushMsg message. Does not implicitly {@link protocol.PushMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.PushMsg
         * @static
         * @param {protocol.IPushMsg} message PushMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                $root.protocol.Message.encode(message.msg, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PushMsg message, length delimited. Does not implicitly {@link protocol.PushMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.PushMsg
         * @static
         * @param {protocol.IPushMsg} message PushMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PushMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PushMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.PushMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.PushMsg} PushMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.PushMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.msg = $root.protocol.Message.decode(reader, reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PushMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.PushMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.PushMsg} PushMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PushMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PushMsg message.
         * @function verify
         * @memberof protocol.PushMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PushMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.msg != null && message.hasOwnProperty("msg")) {
                let error = $root.protocol.Message.verify(message.msg);
                if (error)
                    return "msg." + error;
            }
            return null;
        };

        /**
         * Creates a PushMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.PushMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.PushMsg} PushMsg
         */
        PushMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.PushMsg)
                return object;
            let message = new $root.protocol.PushMsg();
            if (object.msg != null) {
                if (typeof object.msg !== "object")
                    throw TypeError(".protocol.PushMsg.msg: object expected");
                message.msg = $root.protocol.Message.fromObject(object.msg);
            }
            return message;
        };

        /**
         * Creates a plain object from a PushMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.PushMsg
         * @static
         * @param {protocol.PushMsg} message PushMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PushMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.msg = null;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = $root.protocol.Message.toObject(message.msg, options);
            return object;
        };

        /**
         * Converts this PushMsg to JSON.
         * @function toJSON
         * @memberof protocol.PushMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PushMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PushMsg
         * @function getTypeUrl
         * @memberof protocol.PushMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PushMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.PushMsg";
        };

        return PushMsg;
    })();

    protocol.SyncInputMsg = (function() {

        /**
         * Properties of a SyncInputMsg.
         * @memberof protocol
         * @interface ISyncInputMsg
         * @property {number|Long|null} [seq] SyncInputMsg seq
         */

        /**
         * Constructs a new SyncInputMsg.
         * @memberof protocol
         * @classdesc Represents a SyncInputMsg.
         * @implements ISyncInputMsg
         * @constructor
         * @param {protocol.ISyncInputMsg=} [properties] Properties to set
         */
        function SyncInputMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncInputMsg seq.
         * @member {number|Long} seq
         * @memberof protocol.SyncInputMsg
         * @instance
         */
        SyncInputMsg.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new SyncInputMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {protocol.ISyncInputMsg=} [properties] Properties to set
         * @returns {protocol.SyncInputMsg} SyncInputMsg instance
         */
        SyncInputMsg.create = function create(properties) {
            return new SyncInputMsg(properties);
        };

        /**
         * Encodes the specified SyncInputMsg message. Does not implicitly {@link protocol.SyncInputMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {protocol.ISyncInputMsg} message SyncInputMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncInputMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified SyncInputMsg message, length delimited. Does not implicitly {@link protocol.SyncInputMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {protocol.ISyncInputMsg} message SyncInputMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncInputMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncInputMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SyncInputMsg} SyncInputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncInputMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SyncInputMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncInputMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SyncInputMsg} SyncInputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncInputMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncInputMsg message.
         * @function verify
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncInputMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a SyncInputMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SyncInputMsg} SyncInputMsg
         */
        SyncInputMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SyncInputMsg)
                return object;
            let message = new $root.protocol.SyncInputMsg();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a SyncInputMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {protocol.SyncInputMsg} message SyncInputMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncInputMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this SyncInputMsg to JSON.
         * @function toJSON
         * @memberof protocol.SyncInputMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncInputMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncInputMsg
         * @function getTypeUrl
         * @memberof protocol.SyncInputMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncInputMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SyncInputMsg";
        };

        return SyncInputMsg;
    })();

    protocol.SyncOutputMsg = (function() {

        /**
         * Properties of a SyncOutputMsg.
         * @memberof protocol
         * @interface ISyncOutputMsg
         * @property {Array.<protocol.IMessage>|null} [messages] SyncOutputMsg messages
         * @property {boolean|null} [hasMore] SyncOutputMsg hasMore
         */

        /**
         * Constructs a new SyncOutputMsg.
         * @memberof protocol
         * @classdesc Represents a SyncOutputMsg.
         * @implements ISyncOutputMsg
         * @constructor
         * @param {protocol.ISyncOutputMsg=} [properties] Properties to set
         */
        function SyncOutputMsg(properties) {
            this.messages = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncOutputMsg messages.
         * @member {Array.<protocol.IMessage>} messages
         * @memberof protocol.SyncOutputMsg
         * @instance
         */
        SyncOutputMsg.prototype.messages = $util.emptyArray;

        /**
         * SyncOutputMsg hasMore.
         * @member {boolean} hasMore
         * @memberof protocol.SyncOutputMsg
         * @instance
         */
        SyncOutputMsg.prototype.hasMore = false;

        /**
         * Creates a new SyncOutputMsg instance using the specified properties.
         * @function create
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {protocol.ISyncOutputMsg=} [properties] Properties to set
         * @returns {protocol.SyncOutputMsg} SyncOutputMsg instance
         */
        SyncOutputMsg.create = function create(properties) {
            return new SyncOutputMsg(properties);
        };

        /**
         * Encodes the specified SyncOutputMsg message. Does not implicitly {@link protocol.SyncOutputMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {protocol.ISyncOutputMsg} message SyncOutputMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOutputMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (let i = 0; i < message.messages.length; ++i)
                    $root.protocol.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.hasMore != null && Object.hasOwnProperty.call(message, "hasMore"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasMore);
            return writer;
        };

        /**
         * Encodes the specified SyncOutputMsg message, length delimited. Does not implicitly {@link protocol.SyncOutputMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {protocol.ISyncOutputMsg} message SyncOutputMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncOutputMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncOutputMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.SyncOutputMsg} SyncOutputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOutputMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.SyncOutputMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.messages && message.messages.length))
                            message.messages = [];
                        message.messages.push($root.protocol.Message.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.hasMore = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SyncOutputMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.SyncOutputMsg} SyncOutputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncOutputMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncOutputMsg message.
         * @function verify
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncOutputMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (let i = 0; i < message.messages.length; ++i) {
                    let error = $root.protocol.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            if (message.hasMore != null && message.hasOwnProperty("hasMore"))
                if (typeof message.hasMore !== "boolean")
                    return "hasMore: boolean expected";
            return null;
        };

        /**
         * Creates a SyncOutputMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.SyncOutputMsg} SyncOutputMsg
         */
        SyncOutputMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.SyncOutputMsg)
                return object;
            let message = new $root.protocol.SyncOutputMsg();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".protocol.SyncOutputMsg.messages: array expected");
                message.messages = [];
                for (let i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".protocol.SyncOutputMsg.messages: object expected");
                    message.messages[i] = $root.protocol.Message.fromObject(object.messages[i]);
                }
            }
            if (object.hasMore != null)
                message.hasMore = Boolean(object.hasMore);
            return message;
        };

        /**
         * Creates a plain object from a SyncOutputMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {protocol.SyncOutputMsg} message SyncOutputMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncOutputMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (options.defaults)
                object.hasMore = false;
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (let j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.protocol.Message.toObject(message.messages[j], options);
            }
            if (message.hasMore != null && message.hasOwnProperty("hasMore"))
                object.hasMore = message.hasMore;
            return object;
        };

        /**
         * Converts this SyncOutputMsg to JSON.
         * @function toJSON
         * @memberof protocol.SyncOutputMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncOutputMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncOutputMsg
         * @function getTypeUrl
         * @memberof protocol.SyncOutputMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncOutputMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.SyncOutputMsg";
        };

        return SyncOutputMsg;
    })();

    protocol.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protocol
         * @interface IMessage
         * @property {protocol.SessionType|null} [sessionType] Message sessionType
         * @property {number|Long|null} [receiverId] Message receiverId
         * @property {number|Long|null} [senderId] Message senderId
         * @property {protocol.MessageType|null} [messageType] Message messageType
         * @property {Uint8Array|null} [content] Message content
         * @property {number|Long|null} [seq] Message seq
         * @property {number|Long|null} [sendTime] Message sendTime
         */

        /**
         * Constructs a new Message.
         * @memberof protocol
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {protocol.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message sessionType.
         * @member {protocol.SessionType} sessionType
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.sessionType = 0;

        /**
         * Message receiverId.
         * @member {number|Long} receiverId
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.receiverId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message senderId.
         * @member {number|Long} senderId
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.senderId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message messageType.
         * @member {protocol.MessageType} messageType
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.messageType = 0;

        /**
         * Message content.
         * @member {Uint8Array} content
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.content = $util.newBuffer([]);

        /**
         * Message seq.
         * @member {number|Long} seq
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message sendTime.
         * @member {number|Long} sendTime
         * @memberof protocol.Message
         * @instance
         */
        Message.prototype.sendTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage=} [properties] Properties to set
         * @returns {protocol.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @function encode
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sessionType != null && Object.hasOwnProperty.call(message, "sessionType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sessionType);
            if (message.receiverId != null && Object.hasOwnProperty.call(message, "receiverId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.receiverId);
            if (message.senderId != null && Object.hasOwnProperty.call(message, "senderId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.senderId);
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.messageType);
            if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.content);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.seq);
            if (message.sendTime != null && Object.hasOwnProperty.call(message, "sendTime"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.sendTime);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.Message
         * @static
         * @param {protocol.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.Message();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.sessionType = reader.int32();
                        break;
                    }
                case 2: {
                        message.receiverId = reader.int64();
                        break;
                    }
                case 3: {
                        message.senderId = reader.int64();
                        break;
                    }
                case 4: {
                        message.messageType = reader.int32();
                        break;
                    }
                case 5: {
                        message.content = reader.bytes();
                        break;
                    }
                case 6: {
                        message.seq = reader.int64();
                        break;
                    }
                case 7: {
                        message.sendTime = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protocol.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sessionType != null && message.hasOwnProperty("sessionType"))
                switch (message.sessionType) {
                default:
                    return "sessionType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (!$util.isInteger(message.receiverId) && !(message.receiverId && $util.isInteger(message.receiverId.low) && $util.isInteger(message.receiverId.high)))
                    return "receiverId: integer|Long expected";
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (!$util.isInteger(message.senderId) && !(message.senderId && $util.isInteger(message.senderId.low) && $util.isInteger(message.senderId.high)))
                    return "senderId: integer|Long expected";
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.content != null && message.hasOwnProperty("content"))
                if (!(message.content && typeof message.content.length === "number" || $util.isString(message.content)))
                    return "content: buffer expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (!$util.isInteger(message.sendTime) && !(message.sendTime && $util.isInteger(message.sendTime.low) && $util.isInteger(message.sendTime.high)))
                    return "sendTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.Message)
                return object;
            let message = new $root.protocol.Message();
            switch (object.sessionType) {
            default:
                if (typeof object.sessionType === "number") {
                    message.sessionType = object.sessionType;
                    break;
                }
                break;
            case "ST_UnKnow":
            case 0:
                message.sessionType = 0;
                break;
            case "ST_Single":
            case 1:
                message.sessionType = 1;
                break;
            case "ST_Group":
            case 2:
                message.sessionType = 2;
                break;
            }
            if (object.receiverId != null)
                if ($util.Long)
                    (message.receiverId = $util.Long.fromValue(object.receiverId)).unsigned = false;
                else if (typeof object.receiverId === "string")
                    message.receiverId = parseInt(object.receiverId, 10);
                else if (typeof object.receiverId === "number")
                    message.receiverId = object.receiverId;
                else if (typeof object.receiverId === "object")
                    message.receiverId = new $util.LongBits(object.receiverId.low >>> 0, object.receiverId.high >>> 0).toNumber();
            if (object.senderId != null)
                if ($util.Long)
                    (message.senderId = $util.Long.fromValue(object.senderId)).unsigned = false;
                else if (typeof object.senderId === "string")
                    message.senderId = parseInt(object.senderId, 10);
                else if (typeof object.senderId === "number")
                    message.senderId = object.senderId;
                else if (typeof object.senderId === "object")
                    message.senderId = new $util.LongBits(object.senderId.low >>> 0, object.senderId.high >>> 0).toNumber();
            switch (object.messageType) {
            default:
                if (typeof object.messageType === "number") {
                    message.messageType = object.messageType;
                    break;
                }
                break;
            case "MT_UnKnow":
            case 0:
                message.messageType = 0;
                break;
            case "MT_Text":
            case 1:
                message.messageType = 1;
                break;
            case "MT_Picture":
            case 2:
                message.messageType = 2;
                break;
            case "MT_Voice":
            case 3:
                message.messageType = 3;
                break;
            }
            if (object.content != null)
                if (typeof object.content === "string")
                    $util.base64.decode(object.content, message.content = $util.newBuffer($util.base64.length(object.content)), 0);
                else if (object.content.length >= 0)
                    message.content = object.content;
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            if (object.sendTime != null)
                if ($util.Long)
                    (message.sendTime = $util.Long.fromValue(object.sendTime)).unsigned = false;
                else if (typeof object.sendTime === "string")
                    message.sendTime = parseInt(object.sendTime, 10);
                else if (typeof object.sendTime === "number")
                    message.sendTime = object.sendTime;
                else if (typeof object.sendTime === "object")
                    message.sendTime = new $util.LongBits(object.sendTime.low >>> 0, object.sendTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.Message
         * @static
         * @param {protocol.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.sessionType = options.enums === String ? "ST_UnKnow" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.receiverId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.receiverId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.senderId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.senderId = options.longs === String ? "0" : 0;
                object.messageType = options.enums === String ? "MT_UnKnow" : 0;
                if (options.bytes === String)
                    object.content = "";
                else {
                    object.content = [];
                    if (options.bytes !== Array)
                        object.content = $util.newBuffer(object.content);
                }
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.sendTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sendTime = options.longs === String ? "0" : 0;
            }
            if (message.sessionType != null && message.hasOwnProperty("sessionType"))
                object.sessionType = options.enums === String ? $root.protocol.SessionType[message.sessionType] === undefined ? message.sessionType : $root.protocol.SessionType[message.sessionType] : message.sessionType;
            if (message.receiverId != null && message.hasOwnProperty("receiverId"))
                if (typeof message.receiverId === "number")
                    object.receiverId = options.longs === String ? String(message.receiverId) : message.receiverId;
                else
                    object.receiverId = options.longs === String ? $util.Long.prototype.toString.call(message.receiverId) : options.longs === Number ? new $util.LongBits(message.receiverId.low >>> 0, message.receiverId.high >>> 0).toNumber() : message.receiverId;
            if (message.senderId != null && message.hasOwnProperty("senderId"))
                if (typeof message.senderId === "number")
                    object.senderId = options.longs === String ? String(message.senderId) : message.senderId;
                else
                    object.senderId = options.longs === String ? $util.Long.prototype.toString.call(message.senderId) : options.longs === Number ? new $util.LongBits(message.senderId.low >>> 0, message.senderId.high >>> 0).toNumber() : message.senderId;
            if (message.messageType != null && message.hasOwnProperty("messageType"))
                object.messageType = options.enums === String ? $root.protocol.MessageType[message.messageType] === undefined ? message.messageType : $root.protocol.MessageType[message.messageType] : message.messageType;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = options.bytes === String ? $util.base64.encode(message.content, 0, message.content.length) : options.bytes === Array ? Array.prototype.slice.call(message.content) : message.content;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            if (message.sendTime != null && message.hasOwnProperty("sendTime"))
                if (typeof message.sendTime === "number")
                    object.sendTime = options.longs === String ? String(message.sendTime) : message.sendTime;
                else
                    object.sendTime = options.longs === String ? $util.Long.prototype.toString.call(message.sendTime) : options.longs === Number ? new $util.LongBits(message.sendTime.low >>> 0, message.sendTime.high >>> 0).toNumber() : message.sendTime;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof protocol.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Message
         * @function getTypeUrl
         * @memberof protocol.Message
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Message.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.Message";
        };

        return Message;
    })();

    protocol.ACKMsg = (function() {

        /**
         * Properties of a ACKMsg.
         * @memberof protocol
         * @interface IACKMsg
         * @property {protocol.ACKType|null} [type] ACKMsg type
         * @property {number|Long|null} [clientId] ACKMsg clientId
         * @property {number|Long|null} [seq] ACKMsg seq
         */

        /**
         * Constructs a new ACKMsg.
         * @memberof protocol
         * @classdesc Represents a ACKMsg.
         * @implements IACKMsg
         * @constructor
         * @param {protocol.IACKMsg=} [properties] Properties to set
         */
        function ACKMsg(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ACKMsg type.
         * @member {protocol.ACKType} type
         * @memberof protocol.ACKMsg
         * @instance
         */
        ACKMsg.prototype.type = 0;

        /**
         * ACKMsg clientId.
         * @member {number|Long} clientId
         * @memberof protocol.ACKMsg
         * @instance
         */
        ACKMsg.prototype.clientId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ACKMsg seq.
         * @member {number|Long} seq
         * @memberof protocol.ACKMsg
         * @instance
         */
        ACKMsg.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new ACKMsg instance using the specified properties.
         * @function create
         * @memberof protocol.ACKMsg
         * @static
         * @param {protocol.IACKMsg=} [properties] Properties to set
         * @returns {protocol.ACKMsg} ACKMsg instance
         */
        ACKMsg.create = function create(properties) {
            return new ACKMsg(properties);
        };

        /**
         * Encodes the specified ACKMsg message. Does not implicitly {@link protocol.ACKMsg.verify|verify} messages.
         * @function encode
         * @memberof protocol.ACKMsg
         * @static
         * @param {protocol.IACKMsg} message ACKMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ACKMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.clientId);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.seq);
            return writer;
        };

        /**
         * Encodes the specified ACKMsg message, length delimited. Does not implicitly {@link protocol.ACKMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protocol.ACKMsg
         * @static
         * @param {protocol.IACKMsg} message ACKMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ACKMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ACKMsg message from the specified reader or buffer.
         * @function decode
         * @memberof protocol.ACKMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protocol.ACKMsg} ACKMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ACKMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.protocol.ACKMsg();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.clientId = reader.int64();
                        break;
                    }
                case 3: {
                        message.seq = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ACKMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protocol.ACKMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protocol.ACKMsg} ACKMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ACKMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ACKMsg message.
         * @function verify
         * @memberof protocol.ACKMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ACKMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isInteger(message.clientId) && !(message.clientId && $util.isInteger(message.clientId.low) && $util.isInteger(message.clientId.high)))
                    return "clientId: integer|Long expected";
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            return null;
        };

        /**
         * Creates a ACKMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protocol.ACKMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protocol.ACKMsg} ACKMsg
         */
        ACKMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.protocol.ACKMsg)
                return object;
            let message = new $root.protocol.ACKMsg();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "AT_UnKnow":
            case 0:
                message.type = 0;
                break;
            case "AT_Up":
            case 1:
                message.type = 1;
                break;
            case "AT_Push":
            case 2:
                message.type = 2;
                break;
            case "AT_Login":
            case 3:
                message.type = 3;
                break;
            }
            if (object.clientId != null)
                if ($util.Long)
                    (message.clientId = $util.Long.fromValue(object.clientId)).unsigned = false;
                else if (typeof object.clientId === "string")
                    message.clientId = parseInt(object.clientId, 10);
                else if (typeof object.clientId === "number")
                    message.clientId = object.clientId;
                else if (typeof object.clientId === "object")
                    message.clientId = new $util.LongBits(object.clientId.low >>> 0, object.clientId.high >>> 0).toNumber();
            if (object.seq != null)
                if ($util.Long)
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a ACKMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protocol.ACKMsg
         * @static
         * @param {protocol.ACKMsg} message ACKMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ACKMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "AT_UnKnow" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.clientId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.clientId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.protocol.ACKType[message.type] === undefined ? message.type : $root.protocol.ACKType[message.type] : message.type;
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (typeof message.clientId === "number")
                    object.clientId = options.longs === String ? String(message.clientId) : message.clientId;
                else
                    object.clientId = options.longs === String ? $util.Long.prototype.toString.call(message.clientId) : options.longs === Number ? new $util.LongBits(message.clientId.low >>> 0, message.clientId.high >>> 0).toNumber() : message.clientId;
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (typeof message.seq === "number")
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            return object;
        };

        /**
         * Converts this ACKMsg to JSON.
         * @function toJSON
         * @memberof protocol.ACKMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ACKMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ACKMsg
         * @function getTypeUrl
         * @memberof protocol.ACKMsg
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ACKMsg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/protocol.ACKMsg";
        };

        return ACKMsg;
    })();

    return protocol;
})();

export { $root as default };
