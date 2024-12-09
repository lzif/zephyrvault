// Generated by Xata Codegen 0.30.1. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "account",
    checkConstraints: {},
    foreignKeys: {
      account_user_id_fkey: {
        name: "account_user_id_fkey",
        columns: ["user_id"],
        referencedTable: "user",
        referencedColumns: ["id"],
        onDelete: "CASCADE",
      },
    },
    primaryKey: ["id"],
    uniqueConstraints: {},
    columns: [
      {
        name: "access_token",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "access_token_expires_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "account_id",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "created_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "password",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "provider_id",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "refresh_token",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "refresh_token_expires_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "scope",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "updated_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "user_id",
        type: "link",
        link: { table: "user" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
    ],
  },
  {
    name: "session",
    checkConstraints: {},
    foreignKeys: {
      session_user_id_fkey: {
        name: "session_user_id_fkey",
        columns: ["user_id"],
        referencedTable: "user",
        referencedColumns: ["id"],
        onDelete: "CASCADE",
      },
    },
    primaryKey: ["id"],
    uniqueConstraints: {},
    columns: [
      {
        name: "created_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "expires_at",
        type: "timestamp without time zone",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "ip_address",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "token",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "updated_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "user_agent",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "user_id",
        type: "link",
        link: { table: "user" },
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
    ],
  },
  {
    name: "user",
    checkConstraints: {},
    foreignKeys: {},
    primaryKey: ["id"],
    uniqueConstraints: {},
    columns: [
      {
        name: "created_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "email",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "email_verified",
        type: "bool",
        notNull: false,
        unique: false,
        defaultValue: "false",
        comment: "",
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "image",
        type: "text",
        notNull: false,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "name",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "updated_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
    ],
  },
  {
    name: "verification",
    checkConstraints: {},
    foreignKeys: {},
    primaryKey: ["id"],
    uniqueConstraints: {},
    columns: [
      {
        name: "created_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "expires_at",
        type: "timestamp without time zone",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "id",
        type: "text",
        notNull: true,
        unique: true,
        defaultValue: null,
        comment: "",
      },
      {
        name: "identifier",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
      {
        name: "updated_at",
        type: "timestamp without time zone",
        notNull: false,
        unique: false,
        defaultValue: "CURRENT_TIMESTAMP",
        comment: "",
      },
      {
        name: "value",
        type: "text",
        notNull: true,
        unique: false,
        defaultValue: null,
        comment: "",
      },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Account = InferredTypes["account"];
export type AccountRecord = Account & XataRecord;

export type Session = InferredTypes["session"];
export type SessionRecord = Session & XataRecord;

export type User = InferredTypes["user"];
export type UserRecord = User & XataRecord;

export type Verification = InferredTypes["verification"];
export type VerificationRecord = Verification & XataRecord;

export type DatabaseSchema = {
  account: AccountRecord;
  session: SessionRecord;
  user: UserRecord;
  verification: VerificationRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Ryuki-Kazuchi-s-workspace-gko5ru.us-east-1.xata.sh/db/ZephyrVault",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
