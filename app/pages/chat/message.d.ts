import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace protocol. */
export namespace protocol {

    /** SessionType enum. */
    enum SessionType {
        ST_UnKnow = 0,
        ST_Single = 1,
        ST_Group = 2
    }

    /** MessageType enum. */
    enum MessageType {
        MT_UnKnow = 0,
        MT_Text = 1,
        MT_Picture = 2,
        MT_Voice = 3
    }

    /** ACKType enum. */
    enum ACKType {
        AT_UnKnow = 0,
        AT_Up = 1,
        AT_Push = 2,
        AT_Login = 3
    }

    /** CmdType enum. */
    enum CmdType {
        CT_UnKnow = 0,
        CT_Login = 1,
        CT_Heartbeat = 2,
        CT_Message = 3,
        CT_ACK = 4,
        CT_Sync = 5
    }

    /** Properties of an Input. */
    interface IInput {

        /** Input type */
        type?: (protocol.CmdType|null);

        /** Input data */
        data?: (Uint8Array|null);
    }

    /** Represents an Input. */
    class Input implements IInput {

        /**
         * Constructs a new Input.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IInput);

        /** Input type. */
        public type: protocol.CmdType;

        /** Input data. */
        public data: Uint8Array;

        /**
         * Creates a new Input instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Input instance
         */
        public static create(properties?: protocol.IInput): protocol.Input;

        /**
         * Encodes the specified Input message. Does not implicitly {@link protocol.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Input message, length delimited. Does not implicitly {@link protocol.Input.verify|verify} messages.
         * @param message Input message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Input message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Input;

        /**
         * Decodes an Input message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Input
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Input;

        /**
         * Verifies an Input message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Input message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Input
         */
        public static fromObject(object: { [k: string]: any }): protocol.Input;

        /**
         * Creates a plain object from an Input message. Also converts values to other types if specified.
         * @param message Input
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Input to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Input
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an Output. */
    interface IOutput {

        /** Output type */
        type?: (protocol.CmdType|null);

        /** Output code */
        code?: (number|null);

        /** Output codeMsg */
        codeMsg?: (string|null);

        /** Output data */
        data?: (Uint8Array|null);
    }

    /** Represents an Output. */
    class Output implements IOutput {

        /**
         * Constructs a new Output.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOutput);

        /** Output type. */
        public type: protocol.CmdType;

        /** Output code. */
        public code: number;

        /** Output codeMsg. */
        public codeMsg: string;

        /** Output data. */
        public data: Uint8Array;

        /**
         * Creates a new Output instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Output instance
         */
        public static create(properties?: protocol.IOutput): protocol.Output;

        /**
         * Encodes the specified Output message. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Output message, length delimited. Does not implicitly {@link protocol.Output.verify|verify} messages.
         * @param message Output message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Output message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Output;

        /**
         * Decodes an Output message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Output
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Output;

        /**
         * Verifies an Output message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Output message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Output
         */
        public static fromObject(object: { [k: string]: any }): protocol.Output;

        /**
         * Creates a plain object from an Output message. Also converts values to other types if specified.
         * @param message Output
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Output to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Output
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an OutputBatch. */
    interface IOutputBatch {

        /** OutputBatch outputs */
        outputs?: (Uint8Array[]|null);
    }

    /** Represents an OutputBatch. */
    class OutputBatch implements IOutputBatch {

        /**
         * Constructs a new OutputBatch.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IOutputBatch);

        /** OutputBatch outputs. */
        public outputs: Uint8Array[];

        /**
         * Creates a new OutputBatch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputBatch instance
         */
        public static create(properties?: protocol.IOutputBatch): protocol.OutputBatch;

        /**
         * Encodes the specified OutputBatch message. Does not implicitly {@link protocol.OutputBatch.verify|verify} messages.
         * @param message OutputBatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IOutputBatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputBatch message, length delimited. Does not implicitly {@link protocol.OutputBatch.verify|verify} messages.
         * @param message OutputBatch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IOutputBatch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputBatch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.OutputBatch;

        /**
         * Decodes an OutputBatch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputBatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.OutputBatch;

        /**
         * Verifies an OutputBatch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputBatch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputBatch
         */
        public static fromObject(object: { [k: string]: any }): protocol.OutputBatch;

        /**
         * Creates a plain object from an OutputBatch message. Also converts values to other types if specified.
         * @param message OutputBatch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.OutputBatch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputBatch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OutputBatch
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LoginMsg. */
    interface ILoginMsg {

        /** LoginMsg token */
        token?: (Uint8Array|null);
    }

    /** Represents a LoginMsg. */
    class LoginMsg implements ILoginMsg {

        /**
         * Constructs a new LoginMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ILoginMsg);

        /** LoginMsg token. */
        public token: Uint8Array;

        /**
         * Creates a new LoginMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginMsg instance
         */
        public static create(properties?: protocol.ILoginMsg): protocol.LoginMsg;

        /**
         * Encodes the specified LoginMsg message. Does not implicitly {@link protocol.LoginMsg.verify|verify} messages.
         * @param message LoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ILoginMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginMsg message, length delimited. Does not implicitly {@link protocol.LoginMsg.verify|verify} messages.
         * @param message LoginMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ILoginMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.LoginMsg;

        /**
         * Decodes a LoginMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.LoginMsg;

        /**
         * Verifies a LoginMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.LoginMsg;

        /**
         * Creates a plain object from a LoginMsg message. Also converts values to other types if specified.
         * @param message LoginMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.LoginMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LoginMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a HeartbeatMsg. */
    interface IHeartbeatMsg {
    }

    /** Represents a HeartbeatMsg. */
    class HeartbeatMsg implements IHeartbeatMsg {

        /**
         * Constructs a new HeartbeatMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IHeartbeatMsg);

        /**
         * Creates a new HeartbeatMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartbeatMsg instance
         */
        public static create(properties?: protocol.IHeartbeatMsg): protocol.HeartbeatMsg;

        /**
         * Encodes the specified HeartbeatMsg message. Does not implicitly {@link protocol.HeartbeatMsg.verify|verify} messages.
         * @param message HeartbeatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IHeartbeatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartbeatMsg message, length delimited. Does not implicitly {@link protocol.HeartbeatMsg.verify|verify} messages.
         * @param message HeartbeatMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IHeartbeatMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartbeatMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.HeartbeatMsg;

        /**
         * Decodes a HeartbeatMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartbeatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.HeartbeatMsg;

        /**
         * Verifies a HeartbeatMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartbeatMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartbeatMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.HeartbeatMsg;

        /**
         * Creates a plain object from a HeartbeatMsg message. Also converts values to other types if specified.
         * @param message HeartbeatMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.HeartbeatMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartbeatMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for HeartbeatMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an UpMsg. */
    interface IUpMsg {

        /** UpMsg msg */
        msg?: (protocol.IMessage|null);

        /** UpMsg clientId */
        clientId?: (number|Long|null);
    }

    /** Represents an UpMsg. */
    class UpMsg implements IUpMsg {

        /**
         * Constructs a new UpMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IUpMsg);

        /** UpMsg msg. */
        public msg?: (protocol.IMessage|null);

        /** UpMsg clientId. */
        public clientId: (number|Long);

        /**
         * Creates a new UpMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpMsg instance
         */
        public static create(properties?: protocol.IUpMsg): protocol.UpMsg;

        /**
         * Encodes the specified UpMsg message. Does not implicitly {@link protocol.UpMsg.verify|verify} messages.
         * @param message UpMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IUpMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpMsg message, length delimited. Does not implicitly {@link protocol.UpMsg.verify|verify} messages.
         * @param message UpMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IUpMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.UpMsg;

        /**
         * Decodes an UpMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.UpMsg;

        /**
         * Verifies an UpMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.UpMsg;

        /**
         * Creates a plain object from an UpMsg message. Also converts values to other types if specified.
         * @param message UpMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.UpMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UpMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a PushMsg. */
    interface IPushMsg {

        /** PushMsg msg */
        msg?: (protocol.IMessage|null);
    }

    /** Represents a PushMsg. */
    class PushMsg implements IPushMsg {

        /**
         * Constructs a new PushMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IPushMsg);

        /** PushMsg msg. */
        public msg?: (protocol.IMessage|null);

        /**
         * Creates a new PushMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PushMsg instance
         */
        public static create(properties?: protocol.IPushMsg): protocol.PushMsg;

        /**
         * Encodes the specified PushMsg message. Does not implicitly {@link protocol.PushMsg.verify|verify} messages.
         * @param message PushMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IPushMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PushMsg message, length delimited. Does not implicitly {@link protocol.PushMsg.verify|verify} messages.
         * @param message PushMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IPushMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PushMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PushMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.PushMsg;

        /**
         * Decodes a PushMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PushMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.PushMsg;

        /**
         * Verifies a PushMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PushMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PushMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.PushMsg;

        /**
         * Creates a plain object from a PushMsg message. Also converts values to other types if specified.
         * @param message PushMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.PushMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PushMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for PushMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncInputMsg. */
    interface ISyncInputMsg {

        /** SyncInputMsg seq */
        seq?: (number|Long|null);
    }

    /** Represents a SyncInputMsg. */
    class SyncInputMsg implements ISyncInputMsg {

        /**
         * Constructs a new SyncInputMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISyncInputMsg);

        /** SyncInputMsg seq. */
        public seq: (number|Long);

        /**
         * Creates a new SyncInputMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncInputMsg instance
         */
        public static create(properties?: protocol.ISyncInputMsg): protocol.SyncInputMsg;

        /**
         * Encodes the specified SyncInputMsg message. Does not implicitly {@link protocol.SyncInputMsg.verify|verify} messages.
         * @param message SyncInputMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISyncInputMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncInputMsg message, length delimited. Does not implicitly {@link protocol.SyncInputMsg.verify|verify} messages.
         * @param message SyncInputMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISyncInputMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncInputMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncInputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SyncInputMsg;

        /**
         * Decodes a SyncInputMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncInputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SyncInputMsg;

        /**
         * Verifies a SyncInputMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncInputMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncInputMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SyncInputMsg;

        /**
         * Creates a plain object from a SyncInputMsg message. Also converts values to other types if specified.
         * @param message SyncInputMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SyncInputMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncInputMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncInputMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SyncOutputMsg. */
    interface ISyncOutputMsg {

        /** SyncOutputMsg messages */
        messages?: (protocol.IMessage[]|null);

        /** SyncOutputMsg hasMore */
        hasMore?: (boolean|null);
    }

    /** Represents a SyncOutputMsg. */
    class SyncOutputMsg implements ISyncOutputMsg {

        /**
         * Constructs a new SyncOutputMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.ISyncOutputMsg);

        /** SyncOutputMsg messages. */
        public messages: protocol.IMessage[];

        /** SyncOutputMsg hasMore. */
        public hasMore: boolean;

        /**
         * Creates a new SyncOutputMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SyncOutputMsg instance
         */
        public static create(properties?: protocol.ISyncOutputMsg): protocol.SyncOutputMsg;

        /**
         * Encodes the specified SyncOutputMsg message. Does not implicitly {@link protocol.SyncOutputMsg.verify|verify} messages.
         * @param message SyncOutputMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.ISyncOutputMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SyncOutputMsg message, length delimited. Does not implicitly {@link protocol.SyncOutputMsg.verify|verify} messages.
         * @param message SyncOutputMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.ISyncOutputMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncOutputMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SyncOutputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.SyncOutputMsg;

        /**
         * Decodes a SyncOutputMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SyncOutputMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.SyncOutputMsg;

        /**
         * Verifies a SyncOutputMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SyncOutputMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SyncOutputMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.SyncOutputMsg;

        /**
         * Creates a plain object from a SyncOutputMsg message. Also converts values to other types if specified.
         * @param message SyncOutputMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.SyncOutputMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SyncOutputMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SyncOutputMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message sessionType */
        sessionType?: (protocol.SessionType|null);

        /** Message receiverId */
        receiverId?: (number|Long|null);

        /** Message senderId */
        senderId?: (number|Long|null);

        /** Message messageType */
        messageType?: (protocol.MessageType|null);

        /** Message content */
        content?: (Uint8Array|null);

        /** Message seq */
        seq?: (number|Long|null);

        /** Message sendTime */
        sendTime?: (number|Long|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IMessage);

        /** Message sessionType. */
        public sessionType: protocol.SessionType;

        /** Message receiverId. */
        public receiverId: (number|Long);

        /** Message senderId. */
        public senderId: (number|Long);

        /** Message messageType. */
        public messageType: protocol.MessageType;

        /** Message content. */
        public content: Uint8Array;

        /** Message seq. */
        public seq: (number|Long);

        /** Message sendTime. */
        public sendTime: (number|Long);

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protocol.IMessage): protocol.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protocol.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): protocol.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Message
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ACKMsg. */
    interface IACKMsg {

        /** ACKMsg type */
        type?: (protocol.ACKType|null);

        /** ACKMsg clientId */
        clientId?: (number|Long|null);

        /** ACKMsg seq */
        seq?: (number|Long|null);
    }

    /** Represents a ACKMsg. */
    class ACKMsg implements IACKMsg {

        /**
         * Constructs a new ACKMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: protocol.IACKMsg);

        /** ACKMsg type. */
        public type: protocol.ACKType;

        /** ACKMsg clientId. */
        public clientId: (number|Long);

        /** ACKMsg seq. */
        public seq: (number|Long);

        /**
         * Creates a new ACKMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ACKMsg instance
         */
        public static create(properties?: protocol.IACKMsg): protocol.ACKMsg;

        /**
         * Encodes the specified ACKMsg message. Does not implicitly {@link protocol.ACKMsg.verify|verify} messages.
         * @param message ACKMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protocol.IACKMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ACKMsg message, length delimited. Does not implicitly {@link protocol.ACKMsg.verify|verify} messages.
         * @param message ACKMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protocol.IACKMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ACKMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ACKMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protocol.ACKMsg;

        /**
         * Decodes a ACKMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ACKMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protocol.ACKMsg;

        /**
         * Verifies a ACKMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ACKMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ACKMsg
         */
        public static fromObject(object: { [k: string]: any }): protocol.ACKMsg;

        /**
         * Creates a plain object from a ACKMsg message. Also converts values to other types if specified.
         * @param message ACKMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protocol.ACKMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ACKMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ACKMsg
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
