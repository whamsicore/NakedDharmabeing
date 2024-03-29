
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Dharmabeing
 * 
 */
export type Dharmabeing = $Result.DefaultSelection<Prisma.$DharmabeingPayload>
/**
 * Model Dao
 * 
 */
export type Dao = $Result.DefaultSelection<Prisma.$DaoPayload>
/**
 * Model Portal
 * 
 */
export type Portal = $Result.DefaultSelection<Prisma.$PortalPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model DharmaAction
 * 
 */
export type DharmaAction = $Result.DefaultSelection<Prisma.$DharmaActionPayload>
/**
 * Model Conversation
 * 
 */
export type Conversation = $Result.DefaultSelection<Prisma.$ConversationPayload>
/**
 * Model UserMemory
 * 
 */
export type UserMemory = $Result.DefaultSelection<Prisma.$UserMemoryPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Database
 * 
 */
export type Database = $Result.DefaultSelection<Prisma.$DatabasePayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model Attribute
 * 
 */
export type Attribute = $Result.DefaultSelection<Prisma.$AttributePayload>
/**
 * Model Relationship
 * 
 */
export type Relationship = $Result.DefaultSelection<Prisma.$RelationshipPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Execution
 * 
 */
export type Execution = $Result.DefaultSelection<Prisma.$ExecutionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Dharmabeings
 * const dharmabeings = await prisma.dharmabeing.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Dharmabeings
   * const dharmabeings = await prisma.dharmabeing.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.dharmabeing`: Exposes CRUD operations for the **Dharmabeing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dharmabeings
    * const dharmabeings = await prisma.dharmabeing.findMany()
    * ```
    */
  get dharmabeing(): Prisma.DharmabeingDelegate<ExtArgs>;

  /**
   * `prisma.dao`: Exposes CRUD operations for the **Dao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Daos
    * const daos = await prisma.dao.findMany()
    * ```
    */
  get dao(): Prisma.DaoDelegate<ExtArgs>;

  /**
   * `prisma.portal`: Exposes CRUD operations for the **Portal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portals
    * const portals = await prisma.portal.findMany()
    * ```
    */
  get portal(): Prisma.PortalDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs>;

  /**
   * `prisma.dharmaAction`: Exposes CRUD operations for the **DharmaAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DharmaActions
    * const dharmaActions = await prisma.dharmaAction.findMany()
    * ```
    */
  get dharmaAction(): Prisma.DharmaActionDelegate<ExtArgs>;

  /**
   * `prisma.conversation`: Exposes CRUD operations for the **Conversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conversations
    * const conversations = await prisma.conversation.findMany()
    * ```
    */
  get conversation(): Prisma.ConversationDelegate<ExtArgs>;

  /**
   * `prisma.userMemory`: Exposes CRUD operations for the **UserMemory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMemories
    * const userMemories = await prisma.userMemory.findMany()
    * ```
    */
  get userMemory(): Prisma.UserMemoryDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.database`: Exposes CRUD operations for the **Database** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Databases
    * const databases = await prisma.database.findMany()
    * ```
    */
  get database(): Prisma.DatabaseDelegate<ExtArgs>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs>;

  /**
   * `prisma.attribute`: Exposes CRUD operations for the **Attribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attributes
    * const attributes = await prisma.attribute.findMany()
    * ```
    */
  get attribute(): Prisma.AttributeDelegate<ExtArgs>;

  /**
   * `prisma.relationship`: Exposes CRUD operations for the **Relationship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relationships
    * const relationships = await prisma.relationship.findMany()
    * ```
    */
  get relationship(): Prisma.RelationshipDelegate<ExtArgs>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs>;

  /**
   * `prisma.execution`: Exposes CRUD operations for the **Execution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Executions
    * const executions = await prisma.execution.findMany()
    * ```
    */
  get execution(): Prisma.ExecutionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Dharmabeing: 'Dharmabeing',
    Dao: 'Dao',
    Portal: 'Portal',
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    DharmaAction: 'DharmaAction',
    Conversation: 'Conversation',
    UserMemory: 'UserMemory',
    Session: 'Session',
    Database: 'Database',
    Model: 'Model',
    Attribute: 'Attribute',
    Relationship: 'Relationship',
    File: 'File',
    Test: 'Test',
    Execution: 'Execution'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'dharmabeing' | 'dao' | 'portal' | 'user' | 'role' | 'permission' | 'dharmaAction' | 'conversation' | 'userMemory' | 'session' | 'database' | 'model' | 'attribute' | 'relationship' | 'file' | 'test' | 'execution'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Dharmabeing: {
        payload: Prisma.$DharmabeingPayload<ExtArgs>
        fields: Prisma.DharmabeingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DharmabeingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DharmabeingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>
          }
          findFirst: {
            args: Prisma.DharmabeingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DharmabeingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>
          }
          findMany: {
            args: Prisma.DharmabeingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>[]
          }
          create: {
            args: Prisma.DharmabeingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>
          }
          delete: {
            args: Prisma.DharmabeingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>
          }
          update: {
            args: Prisma.DharmabeingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>
          }
          deleteMany: {
            args: Prisma.DharmabeingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DharmabeingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DharmabeingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmabeingPayload>
          }
          aggregate: {
            args: Prisma.DharmabeingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDharmabeing>
          }
          groupBy: {
            args: Prisma.DharmabeingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DharmabeingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DharmabeingCountArgs<ExtArgs>,
            result: $Utils.Optional<DharmabeingCountAggregateOutputType> | number
          }
        }
      }
      Dao: {
        payload: Prisma.$DaoPayload<ExtArgs>
        fields: Prisma.DaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DaoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DaoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>
          }
          findFirst: {
            args: Prisma.DaoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DaoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>
          }
          findMany: {
            args: Prisma.DaoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>[]
          }
          create: {
            args: Prisma.DaoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>
          }
          delete: {
            args: Prisma.DaoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>
          }
          update: {
            args: Prisma.DaoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>
          }
          deleteMany: {
            args: Prisma.DaoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DaoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DaoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DaoPayload>
          }
          aggregate: {
            args: Prisma.DaoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDao>
          }
          groupBy: {
            args: Prisma.DaoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.DaoCountArgs<ExtArgs>,
            result: $Utils.Optional<DaoCountAggregateOutputType> | number
          }
        }
      }
      Portal: {
        payload: Prisma.$PortalPayload<ExtArgs>
        fields: Prisma.PortalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortalFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortalFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>
          }
          findFirst: {
            args: Prisma.PortalFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortalFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>
          }
          findMany: {
            args: Prisma.PortalFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>[]
          }
          create: {
            args: Prisma.PortalCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>
          }
          delete: {
            args: Prisma.PortalDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>
          }
          update: {
            args: Prisma.PortalUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>
          }
          deleteMany: {
            args: Prisma.PortalDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PortalUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PortalUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PortalPayload>
          }
          aggregate: {
            args: Prisma.PortalAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePortal>
          }
          groupBy: {
            args: Prisma.PortalGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PortalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortalCountArgs<ExtArgs>,
            result: $Utils.Optional<PortalCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>,
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      DharmaAction: {
        payload: Prisma.$DharmaActionPayload<ExtArgs>
        fields: Prisma.DharmaActionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DharmaActionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DharmaActionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>
          }
          findFirst: {
            args: Prisma.DharmaActionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DharmaActionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>
          }
          findMany: {
            args: Prisma.DharmaActionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>[]
          }
          create: {
            args: Prisma.DharmaActionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>
          }
          delete: {
            args: Prisma.DharmaActionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>
          }
          update: {
            args: Prisma.DharmaActionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>
          }
          deleteMany: {
            args: Prisma.DharmaActionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DharmaActionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DharmaActionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaActionPayload>
          }
          aggregate: {
            args: Prisma.DharmaActionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDharmaAction>
          }
          groupBy: {
            args: Prisma.DharmaActionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DharmaActionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DharmaActionCountArgs<ExtArgs>,
            result: $Utils.Optional<DharmaActionCountAggregateOutputType> | number
          }
        }
      }
      Conversation: {
        payload: Prisma.$ConversationPayload<ExtArgs>
        fields: Prisma.ConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConversationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConversationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findFirst: {
            args: Prisma.ConversationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConversationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          findMany: {
            args: Prisma.ConversationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>[]
          }
          create: {
            args: Prisma.ConversationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          delete: {
            args: Prisma.ConversationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          update: {
            args: Prisma.ConversationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          deleteMany: {
            args: Prisma.ConversationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ConversationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ConversationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ConversationPayload>
          }
          aggregate: {
            args: Prisma.ConversationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateConversation>
          }
          groupBy: {
            args: Prisma.ConversationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConversationCountArgs<ExtArgs>,
            result: $Utils.Optional<ConversationCountAggregateOutputType> | number
          }
        }
      }
      UserMemory: {
        payload: Prisma.$UserMemoryPayload<ExtArgs>
        fields: Prisma.UserMemoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMemoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMemoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>
          }
          findFirst: {
            args: Prisma.UserMemoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMemoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>
          }
          findMany: {
            args: Prisma.UserMemoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>[]
          }
          create: {
            args: Prisma.UserMemoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>
          }
          delete: {
            args: Prisma.UserMemoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>
          }
          update: {
            args: Prisma.UserMemoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>
          }
          deleteMany: {
            args: Prisma.UserMemoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserMemoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserMemoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserMemoryPayload>
          }
          aggregate: {
            args: Prisma.UserMemoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserMemory>
          }
          groupBy: {
            args: Prisma.UserMemoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserMemoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMemoryCountArgs<ExtArgs>,
            result: $Utils.Optional<UserMemoryCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Database: {
        payload: Prisma.$DatabasePayload<ExtArgs>
        fields: Prisma.DatabaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatabaseFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatabaseFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>
          }
          findFirst: {
            args: Prisma.DatabaseFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatabaseFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>
          }
          findMany: {
            args: Prisma.DatabaseFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>[]
          }
          create: {
            args: Prisma.DatabaseCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>
          }
          delete: {
            args: Prisma.DatabaseDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>
          }
          update: {
            args: Prisma.DatabaseUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>
          }
          deleteMany: {
            args: Prisma.DatabaseDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DatabaseUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DatabaseUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DatabasePayload>
          }
          aggregate: {
            args: Prisma.DatabaseAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDatabase>
          }
          groupBy: {
            args: Prisma.DatabaseGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DatabaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatabaseCountArgs<ExtArgs>,
            result: $Utils.Optional<DatabaseCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>,
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      Attribute: {
        payload: Prisma.$AttributePayload<ExtArgs>
        fields: Prisma.AttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttributeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttributeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findFirst: {
            args: Prisma.AttributeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttributeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          findMany: {
            args: Prisma.AttributeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>[]
          }
          create: {
            args: Prisma.AttributeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          delete: {
            args: Prisma.AttributeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          update: {
            args: Prisma.AttributeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          deleteMany: {
            args: Prisma.AttributeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AttributeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AttributeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AttributePayload>
          }
          aggregate: {
            args: Prisma.AttributeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAttribute>
          }
          groupBy: {
            args: Prisma.AttributeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttributeCountArgs<ExtArgs>,
            result: $Utils.Optional<AttributeCountAggregateOutputType> | number
          }
        }
      }
      Relationship: {
        payload: Prisma.$RelationshipPayload<ExtArgs>
        fields: Prisma.RelationshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationshipFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationshipFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findFirst: {
            args: Prisma.RelationshipFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationshipFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          findMany: {
            args: Prisma.RelationshipFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>[]
          }
          create: {
            args: Prisma.RelationshipCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          delete: {
            args: Prisma.RelationshipDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          update: {
            args: Prisma.RelationshipUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          deleteMany: {
            args: Prisma.RelationshipDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RelationshipUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RelationshipUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RelationshipPayload>
          }
          aggregate: {
            args: Prisma.RelationshipAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRelationship>
          }
          groupBy: {
            args: Prisma.RelationshipGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RelationshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationshipCountArgs<ExtArgs>,
            result: $Utils.Optional<RelationshipCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>,
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>,
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Execution: {
        payload: Prisma.$ExecutionPayload<ExtArgs>
        fields: Prisma.ExecutionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          findFirst: {
            args: Prisma.ExecutionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          findMany: {
            args: Prisma.ExecutionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>[]
          }
          create: {
            args: Prisma.ExecutionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          delete: {
            args: Prisma.ExecutionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          update: {
            args: Prisma.ExecutionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExecutionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExecutionPayload>
          }
          aggregate: {
            args: Prisma.ExecutionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExecution>
          }
          groupBy: {
            args: Prisma.ExecutionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExecutionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionCountArgs<ExtArgs>,
            result: $Utils.Optional<ExecutionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DharmabeingCountOutputType
   */

  export type DharmabeingCountOutputType = {
    conversations: number
  }

  export type DharmabeingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | DharmabeingCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes

  /**
   * DharmabeingCountOutputType without action
   */
  export type DharmabeingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmabeingCountOutputType
     */
    select?: DharmabeingCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DharmabeingCountOutputType without action
   */
  export type DharmabeingCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }



  /**
   * Count Type DaoCountOutputType
   */

  export type DaoCountOutputType = {
    children: number
    portals: number
  }

  export type DaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | DaoCountOutputTypeCountChildrenArgs
    portals?: boolean | DaoCountOutputTypeCountPortalsArgs
  }

  // Custom InputTypes

  /**
   * DaoCountOutputType without action
   */
  export type DaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DaoCountOutputType
     */
    select?: DaoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DaoCountOutputType without action
   */
  export type DaoCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaoWhereInput
  }


  /**
   * DaoCountOutputType without action
   */
  export type DaoCountOutputTypeCountPortalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    sessions: number
    memories: number
    conversations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    memories?: boolean | UserCountOutputTypeCountMemoriesArgs
    conversations?: boolean | UserCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMemoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMemoryWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
  }



  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    permissions: number
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }


  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }



  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
    actions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
    actions?: boolean | PermissionCountOutputTypeCountActionsArgs
  }

  // Custom InputTypes

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountActionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DharmaActionWhereInput
  }



  /**
   * Count Type DharmaActionCountOutputType
   */

  export type DharmaActionCountOutputType = {
    permissions: number
  }

  export type DharmaActionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | DharmaActionCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes

  /**
   * DharmaActionCountOutputType without action
   */
  export type DharmaActionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaActionCountOutputType
     */
    select?: DharmaActionCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DharmaActionCountOutputType without action
   */
  export type DharmaActionCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }



  /**
   * Count Type DatabaseCountOutputType
   */

  export type DatabaseCountOutputType = {
    models: number
  }

  export type DatabaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | DatabaseCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes

  /**
   * DatabaseCountOutputType without action
   */
  export type DatabaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatabaseCountOutputType
     */
    select?: DatabaseCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DatabaseCountOutputType without action
   */
  export type DatabaseCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }



  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    attributes: number
    relationshipsFrom: number
    relationshipsTo: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | ModelCountOutputTypeCountAttributesArgs
    relationshipsFrom?: boolean | ModelCountOutputTypeCountRelationshipsFromArgs
    relationshipsTo?: boolean | ModelCountOutputTypeCountRelationshipsToArgs
  }

  // Custom InputTypes

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountRelationshipsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountRelationshipsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
  }



  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    executions: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | TestCountOutputTypeCountExecutionsArgs
  }

  // Custom InputTypes

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountExecutionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Dharmabeing
   */

  export type AggregateDharmabeing = {
    _count: DharmabeingCountAggregateOutputType | null
    _avg: DharmabeingAvgAggregateOutputType | null
    _sum: DharmabeingSumAggregateOutputType | null
    _min: DharmabeingMinAggregateOutputType | null
    _max: DharmabeingMaxAggregateOutputType | null
  }

  export type DharmabeingAvgAggregateOutputType = {
    id: number | null
  }

  export type DharmabeingSumAggregateOutputType = {
    id: number | null
  }

  export type DharmabeingMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    attributes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    permissions: string | null
  }

  export type DharmabeingMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    attributes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    permissions: string | null
  }

  export type DharmabeingCountAggregateOutputType = {
    id: number
    name: number
    type: number
    attributes: number
    createdAt: number
    updatedAt: number
    permissions: number
    _all: number
  }


  export type DharmabeingAvgAggregateInputType = {
    id?: true
  }

  export type DharmabeingSumAggregateInputType = {
    id?: true
  }

  export type DharmabeingMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    permissions?: true
  }

  export type DharmabeingMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    permissions?: true
  }

  export type DharmabeingCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    permissions?: true
    _all?: true
  }

  export type DharmabeingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dharmabeing to aggregate.
     */
    where?: DharmabeingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dharmabeings to fetch.
     */
    orderBy?: DharmabeingOrderByWithRelationInput | DharmabeingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DharmabeingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dharmabeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dharmabeings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dharmabeings
    **/
    _count?: true | DharmabeingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DharmabeingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DharmabeingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DharmabeingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DharmabeingMaxAggregateInputType
  }

  export type GetDharmabeingAggregateType<T extends DharmabeingAggregateArgs> = {
        [P in keyof T & keyof AggregateDharmabeing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDharmabeing[P]>
      : GetScalarType<T[P], AggregateDharmabeing[P]>
  }




  export type DharmabeingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DharmabeingWhereInput
    orderBy?: DharmabeingOrderByWithAggregationInput | DharmabeingOrderByWithAggregationInput[]
    by: DharmabeingScalarFieldEnum[] | DharmabeingScalarFieldEnum
    having?: DharmabeingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DharmabeingCountAggregateInputType | true
    _avg?: DharmabeingAvgAggregateInputType
    _sum?: DharmabeingSumAggregateInputType
    _min?: DharmabeingMinAggregateInputType
    _max?: DharmabeingMaxAggregateInputType
  }

  export type DharmabeingGroupByOutputType = {
    id: number
    name: string
    type: string
    attributes: string | null
    createdAt: Date
    updatedAt: Date
    permissions: string
    _count: DharmabeingCountAggregateOutputType | null
    _avg: DharmabeingAvgAggregateOutputType | null
    _sum: DharmabeingSumAggregateOutputType | null
    _min: DharmabeingMinAggregateOutputType | null
    _max: DharmabeingMaxAggregateOutputType | null
  }

  type GetDharmabeingGroupByPayload<T extends DharmabeingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DharmabeingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DharmabeingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DharmabeingGroupByOutputType[P]>
            : GetScalarType<T[P], DharmabeingGroupByOutputType[P]>
        }
      >
    >


  export type DharmabeingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissions?: boolean
    conversations?: boolean | Dharmabeing$conversationsArgs<ExtArgs>
    _count?: boolean | DharmabeingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dharmabeing"]>

  export type DharmabeingSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissions?: boolean
  }

  export type DharmabeingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversations?: boolean | Dharmabeing$conversationsArgs<ExtArgs>
    _count?: boolean | DharmabeingCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DharmabeingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dharmabeing"
    objects: {
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      attributes: string | null
      createdAt: Date
      updatedAt: Date
      permissions: string
    }, ExtArgs["result"]["dharmabeing"]>
    composites: {}
  }


  type DharmabeingGetPayload<S extends boolean | null | undefined | DharmabeingDefaultArgs> = $Result.GetResult<Prisma.$DharmabeingPayload, S>

  type DharmabeingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DharmabeingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DharmabeingCountAggregateInputType | true
    }

  export interface DharmabeingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dharmabeing'], meta: { name: 'Dharmabeing' } }
    /**
     * Find zero or one Dharmabeing that matches the filter.
     * @param {DharmabeingFindUniqueArgs} args - Arguments to find a Dharmabeing
     * @example
     * // Get one Dharmabeing
     * const dharmabeing = await prisma.dharmabeing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DharmabeingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DharmabeingFindUniqueArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dharmabeing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DharmabeingFindUniqueOrThrowArgs} args - Arguments to find a Dharmabeing
     * @example
     * // Get one Dharmabeing
     * const dharmabeing = await prisma.dharmabeing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DharmabeingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmabeingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dharmabeing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingFindFirstArgs} args - Arguments to find a Dharmabeing
     * @example
     * // Get one Dharmabeing
     * const dharmabeing = await prisma.dharmabeing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DharmabeingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmabeingFindFirstArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dharmabeing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingFindFirstOrThrowArgs} args - Arguments to find a Dharmabeing
     * @example
     * // Get one Dharmabeing
     * const dharmabeing = await prisma.dharmabeing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DharmabeingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmabeingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Dharmabeings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dharmabeings
     * const dharmabeings = await prisma.dharmabeing.findMany()
     * 
     * // Get first 10 Dharmabeings
     * const dharmabeings = await prisma.dharmabeing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dharmabeingWithIdOnly = await prisma.dharmabeing.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DharmabeingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmabeingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dharmabeing.
     * @param {DharmabeingCreateArgs} args - Arguments to create a Dharmabeing.
     * @example
     * // Create one Dharmabeing
     * const Dharmabeing = await prisma.dharmabeing.create({
     *   data: {
     *     // ... data to create a Dharmabeing
     *   }
     * })
     * 
    **/
    create<T extends DharmabeingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DharmabeingCreateArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Dharmabeing.
     * @param {DharmabeingDeleteArgs} args - Arguments to delete one Dharmabeing.
     * @example
     * // Delete one Dharmabeing
     * const Dharmabeing = await prisma.dharmabeing.delete({
     *   where: {
     *     // ... filter to delete one Dharmabeing
     *   }
     * })
     * 
    **/
    delete<T extends DharmabeingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DharmabeingDeleteArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dharmabeing.
     * @param {DharmabeingUpdateArgs} args - Arguments to update one Dharmabeing.
     * @example
     * // Update one Dharmabeing
     * const dharmabeing = await prisma.dharmabeing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DharmabeingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DharmabeingUpdateArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Dharmabeings.
     * @param {DharmabeingDeleteManyArgs} args - Arguments to filter Dharmabeings to delete.
     * @example
     * // Delete a few Dharmabeings
     * const { count } = await prisma.dharmabeing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DharmabeingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmabeingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dharmabeings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dharmabeings
     * const dharmabeing = await prisma.dharmabeing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DharmabeingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DharmabeingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dharmabeing.
     * @param {DharmabeingUpsertArgs} args - Arguments to update or create a Dharmabeing.
     * @example
     * // Update or create a Dharmabeing
     * const dharmabeing = await prisma.dharmabeing.upsert({
     *   create: {
     *     // ... data to create a Dharmabeing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dharmabeing we want to update
     *   }
     * })
    **/
    upsert<T extends DharmabeingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DharmabeingUpsertArgs<ExtArgs>>
    ): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Dharmabeings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingCountArgs} args - Arguments to filter Dharmabeings to count.
     * @example
     * // Count the number of Dharmabeings
     * const count = await prisma.dharmabeing.count({
     *   where: {
     *     // ... the filter for the Dharmabeings we want to count
     *   }
     * })
    **/
    count<T extends DharmabeingCountArgs>(
      args?: Subset<T, DharmabeingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DharmabeingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dharmabeing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DharmabeingAggregateArgs>(args: Subset<T, DharmabeingAggregateArgs>): Prisma.PrismaPromise<GetDharmabeingAggregateType<T>>

    /**
     * Group by Dharmabeing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmabeingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DharmabeingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DharmabeingGroupByArgs['orderBy'] }
        : { orderBy?: DharmabeingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DharmabeingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDharmabeingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dharmabeing model
   */
  readonly fields: DharmabeingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dharmabeing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DharmabeingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversations<T extends Dharmabeing$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, Dharmabeing$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dharmabeing model
   */ 
  interface DharmabeingFieldRefs {
    readonly id: FieldRef<"Dharmabeing", 'Int'>
    readonly name: FieldRef<"Dharmabeing", 'String'>
    readonly type: FieldRef<"Dharmabeing", 'String'>
    readonly attributes: FieldRef<"Dharmabeing", 'String'>
    readonly createdAt: FieldRef<"Dharmabeing", 'DateTime'>
    readonly updatedAt: FieldRef<"Dharmabeing", 'DateTime'>
    readonly permissions: FieldRef<"Dharmabeing", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Dharmabeing findUnique
   */
  export type DharmabeingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * Filter, which Dharmabeing to fetch.
     */
    where: DharmabeingWhereUniqueInput
  }


  /**
   * Dharmabeing findUniqueOrThrow
   */
  export type DharmabeingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * Filter, which Dharmabeing to fetch.
     */
    where: DharmabeingWhereUniqueInput
  }


  /**
   * Dharmabeing findFirst
   */
  export type DharmabeingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * Filter, which Dharmabeing to fetch.
     */
    where?: DharmabeingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dharmabeings to fetch.
     */
    orderBy?: DharmabeingOrderByWithRelationInput | DharmabeingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dharmabeings.
     */
    cursor?: DharmabeingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dharmabeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dharmabeings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dharmabeings.
     */
    distinct?: DharmabeingScalarFieldEnum | DharmabeingScalarFieldEnum[]
  }


  /**
   * Dharmabeing findFirstOrThrow
   */
  export type DharmabeingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * Filter, which Dharmabeing to fetch.
     */
    where?: DharmabeingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dharmabeings to fetch.
     */
    orderBy?: DharmabeingOrderByWithRelationInput | DharmabeingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dharmabeings.
     */
    cursor?: DharmabeingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dharmabeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dharmabeings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dharmabeings.
     */
    distinct?: DharmabeingScalarFieldEnum | DharmabeingScalarFieldEnum[]
  }


  /**
   * Dharmabeing findMany
   */
  export type DharmabeingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * Filter, which Dharmabeings to fetch.
     */
    where?: DharmabeingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dharmabeings to fetch.
     */
    orderBy?: DharmabeingOrderByWithRelationInput | DharmabeingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dharmabeings.
     */
    cursor?: DharmabeingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dharmabeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dharmabeings.
     */
    skip?: number
    distinct?: DharmabeingScalarFieldEnum | DharmabeingScalarFieldEnum[]
  }


  /**
   * Dharmabeing create
   */
  export type DharmabeingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * The data needed to create a Dharmabeing.
     */
    data: XOR<DharmabeingCreateInput, DharmabeingUncheckedCreateInput>
  }


  /**
   * Dharmabeing update
   */
  export type DharmabeingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * The data needed to update a Dharmabeing.
     */
    data: XOR<DharmabeingUpdateInput, DharmabeingUncheckedUpdateInput>
    /**
     * Choose, which Dharmabeing to update.
     */
    where: DharmabeingWhereUniqueInput
  }


  /**
   * Dharmabeing updateMany
   */
  export type DharmabeingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dharmabeings.
     */
    data: XOR<DharmabeingUpdateManyMutationInput, DharmabeingUncheckedUpdateManyInput>
    /**
     * Filter which Dharmabeings to update
     */
    where?: DharmabeingWhereInput
  }


  /**
   * Dharmabeing upsert
   */
  export type DharmabeingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * The filter to search for the Dharmabeing to update in case it exists.
     */
    where: DharmabeingWhereUniqueInput
    /**
     * In case the Dharmabeing found by the `where` argument doesn't exist, create a new Dharmabeing with this data.
     */
    create: XOR<DharmabeingCreateInput, DharmabeingUncheckedCreateInput>
    /**
     * In case the Dharmabeing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DharmabeingUpdateInput, DharmabeingUncheckedUpdateInput>
  }


  /**
   * Dharmabeing delete
   */
  export type DharmabeingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
    /**
     * Filter which Dharmabeing to delete.
     */
    where: DharmabeingWhereUniqueInput
  }


  /**
   * Dharmabeing deleteMany
   */
  export type DharmabeingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dharmabeings to delete
     */
    where?: DharmabeingWhereInput
  }


  /**
   * Dharmabeing.conversations
   */
  export type Dharmabeing$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Dharmabeing without action
   */
  export type DharmabeingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dharmabeing
     */
    select?: DharmabeingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmabeingInclude<ExtArgs> | null
  }



  /**
   * Model Dao
   */

  export type AggregateDao = {
    _count: DaoCountAggregateOutputType | null
    _avg: DaoAvgAggregateOutputType | null
    _sum: DaoSumAggregateOutputType | null
    _min: DaoMinAggregateOutputType | null
    _max: DaoMaxAggregateOutputType | null
  }

  export type DaoAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    treasury: number | null
    parentId: number | null
  }

  export type DaoSumAggregateOutputType = {
    id: number | null
    energy: number | null
    treasury: number | null
    parentId: number | null
  }

  export type DaoMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    energy: number | null
    treasury: number | null
    accounts: string | null
    canvas: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: number | null
  }

  export type DaoMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    energy: number | null
    treasury: number | null
    accounts: string | null
    canvas: string | null
    createdAt: Date | null
    updatedAt: Date | null
    parentId: number | null
  }

  export type DaoCountAggregateOutputType = {
    id: number
    name: number
    description: number
    energy: number
    treasury: number
    accounts: number
    canvas: number
    createdAt: number
    updatedAt: number
    parentId: number
    _all: number
  }


  export type DaoAvgAggregateInputType = {
    id?: true
    energy?: true
    treasury?: true
    parentId?: true
  }

  export type DaoSumAggregateInputType = {
    id?: true
    energy?: true
    treasury?: true
    parentId?: true
  }

  export type DaoMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    energy?: true
    treasury?: true
    accounts?: true
    canvas?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type DaoMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    energy?: true
    treasury?: true
    accounts?: true
    canvas?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
  }

  export type DaoCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    energy?: true
    treasury?: true
    accounts?: true
    canvas?: true
    createdAt?: true
    updatedAt?: true
    parentId?: true
    _all?: true
  }

  export type DaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dao to aggregate.
     */
    where?: DaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daos to fetch.
     */
    orderBy?: DaoOrderByWithRelationInput | DaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Daos
    **/
    _count?: true | DaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DaoMaxAggregateInputType
  }

  export type GetDaoAggregateType<T extends DaoAggregateArgs> = {
        [P in keyof T & keyof AggregateDao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDao[P]>
      : GetScalarType<T[P], AggregateDao[P]>
  }




  export type DaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DaoWhereInput
    orderBy?: DaoOrderByWithAggregationInput | DaoOrderByWithAggregationInput[]
    by: DaoScalarFieldEnum[] | DaoScalarFieldEnum
    having?: DaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DaoCountAggregateInputType | true
    _avg?: DaoAvgAggregateInputType
    _sum?: DaoSumAggregateInputType
    _min?: DaoMinAggregateInputType
    _max?: DaoMaxAggregateInputType
  }

  export type DaoGroupByOutputType = {
    id: number
    name: string
    description: string | null
    energy: number
    treasury: number
    accounts: string | null
    canvas: string | null
    createdAt: Date
    updatedAt: Date
    parentId: number | null
    _count: DaoCountAggregateOutputType | null
    _avg: DaoAvgAggregateOutputType | null
    _sum: DaoSumAggregateOutputType | null
    _min: DaoMinAggregateOutputType | null
    _max: DaoMaxAggregateOutputType | null
  }

  type GetDaoGroupByPayload<T extends DaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DaoGroupByOutputType[P]>
            : GetScalarType<T[P], DaoGroupByOutputType[P]>
        }
      >
    >


  export type DaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    energy?: boolean
    treasury?: boolean
    accounts?: boolean
    canvas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
    parent?: boolean | Dao$parentArgs<ExtArgs>
    children?: boolean | Dao$childrenArgs<ExtArgs>
    portals?: boolean | Dao$portalsArgs<ExtArgs>
    _count?: boolean | DaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dao"]>

  export type DaoSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    energy?: boolean
    treasury?: boolean
    accounts?: boolean
    canvas?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parentId?: boolean
  }

  export type DaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Dao$parentArgs<ExtArgs>
    children?: boolean | Dao$childrenArgs<ExtArgs>
    portals?: boolean | Dao$portalsArgs<ExtArgs>
    _count?: boolean | DaoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dao"
    objects: {
      parent: Prisma.$DaoPayload<ExtArgs> | null
      children: Prisma.$DaoPayload<ExtArgs>[]
      portals: Prisma.$PortalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      energy: number
      treasury: number
      accounts: string | null
      canvas: string | null
      createdAt: Date
      updatedAt: Date
      parentId: number | null
    }, ExtArgs["result"]["dao"]>
    composites: {}
  }


  type DaoGetPayload<S extends boolean | null | undefined | DaoDefaultArgs> = $Result.GetResult<Prisma.$DaoPayload, S>

  type DaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DaoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DaoCountAggregateInputType | true
    }

  export interface DaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dao'], meta: { name: 'Dao' } }
    /**
     * Find zero or one Dao that matches the filter.
     * @param {DaoFindUniqueArgs} args - Arguments to find a Dao
     * @example
     * // Get one Dao
     * const dao = await prisma.dao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DaoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DaoFindUniqueArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Dao that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DaoFindUniqueOrThrowArgs} args - Arguments to find a Dao
     * @example
     * // Get one Dao
     * const dao = await prisma.dao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DaoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DaoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Dao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoFindFirstArgs} args - Arguments to find a Dao
     * @example
     * // Get one Dao
     * const dao = await prisma.dao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DaoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DaoFindFirstArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Dao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoFindFirstOrThrowArgs} args - Arguments to find a Dao
     * @example
     * // Get one Dao
     * const dao = await prisma.dao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DaoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DaoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Daos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Daos
     * const daos = await prisma.dao.findMany()
     * 
     * // Get first 10 Daos
     * const daos = await prisma.dao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const daoWithIdOnly = await prisma.dao.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DaoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Dao.
     * @param {DaoCreateArgs} args - Arguments to create a Dao.
     * @example
     * // Create one Dao
     * const Dao = await prisma.dao.create({
     *   data: {
     *     // ... data to create a Dao
     *   }
     * })
     * 
    **/
    create<T extends DaoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DaoCreateArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Dao.
     * @param {DaoDeleteArgs} args - Arguments to delete one Dao.
     * @example
     * // Delete one Dao
     * const Dao = await prisma.dao.delete({
     *   where: {
     *     // ... filter to delete one Dao
     *   }
     * })
     * 
    **/
    delete<T extends DaoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DaoDeleteArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Dao.
     * @param {DaoUpdateArgs} args - Arguments to update one Dao.
     * @example
     * // Update one Dao
     * const dao = await prisma.dao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DaoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DaoUpdateArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Daos.
     * @param {DaoDeleteManyArgs} args - Arguments to filter Daos to delete.
     * @example
     * // Delete a few Daos
     * const { count } = await prisma.dao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DaoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DaoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Daos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Daos
     * const dao = await prisma.dao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DaoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DaoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dao.
     * @param {DaoUpsertArgs} args - Arguments to update or create a Dao.
     * @example
     * // Update or create a Dao
     * const dao = await prisma.dao.upsert({
     *   create: {
     *     // ... data to create a Dao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dao we want to update
     *   }
     * })
    **/
    upsert<T extends DaoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DaoUpsertArgs<ExtArgs>>
    ): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Daos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoCountArgs} args - Arguments to filter Daos to count.
     * @example
     * // Count the number of Daos
     * const count = await prisma.dao.count({
     *   where: {
     *     // ... the filter for the Daos we want to count
     *   }
     * })
    **/
    count<T extends DaoCountArgs>(
      args?: Subset<T, DaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DaoAggregateArgs>(args: Subset<T, DaoAggregateArgs>): Prisma.PrismaPromise<GetDaoAggregateType<T>>

    /**
     * Group by Dao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DaoGroupByArgs['orderBy'] }
        : { orderBy?: DaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dao model
   */
  readonly fields: DaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends Dao$parentArgs<ExtArgs> = {}>(args?: Subset<T, Dao$parentArgs<ExtArgs>>): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends Dao$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Dao$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findMany'> | Null>;

    portals<T extends Dao$portalsArgs<ExtArgs> = {}>(args?: Subset<T, Dao$portalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Dao model
   */ 
  interface DaoFieldRefs {
    readonly id: FieldRef<"Dao", 'Int'>
    readonly name: FieldRef<"Dao", 'String'>
    readonly description: FieldRef<"Dao", 'String'>
    readonly energy: FieldRef<"Dao", 'Int'>
    readonly treasury: FieldRef<"Dao", 'Int'>
    readonly accounts: FieldRef<"Dao", 'String'>
    readonly canvas: FieldRef<"Dao", 'String'>
    readonly createdAt: FieldRef<"Dao", 'DateTime'>
    readonly updatedAt: FieldRef<"Dao", 'DateTime'>
    readonly parentId: FieldRef<"Dao", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Dao findUnique
   */
  export type DaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * Filter, which Dao to fetch.
     */
    where: DaoWhereUniqueInput
  }


  /**
   * Dao findUniqueOrThrow
   */
  export type DaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * Filter, which Dao to fetch.
     */
    where: DaoWhereUniqueInput
  }


  /**
   * Dao findFirst
   */
  export type DaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * Filter, which Dao to fetch.
     */
    where?: DaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daos to fetch.
     */
    orderBy?: DaoOrderByWithRelationInput | DaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Daos.
     */
    cursor?: DaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Daos.
     */
    distinct?: DaoScalarFieldEnum | DaoScalarFieldEnum[]
  }


  /**
   * Dao findFirstOrThrow
   */
  export type DaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * Filter, which Dao to fetch.
     */
    where?: DaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daos to fetch.
     */
    orderBy?: DaoOrderByWithRelationInput | DaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Daos.
     */
    cursor?: DaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Daos.
     */
    distinct?: DaoScalarFieldEnum | DaoScalarFieldEnum[]
  }


  /**
   * Dao findMany
   */
  export type DaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * Filter, which Daos to fetch.
     */
    where?: DaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Daos to fetch.
     */
    orderBy?: DaoOrderByWithRelationInput | DaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Daos.
     */
    cursor?: DaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Daos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Daos.
     */
    skip?: number
    distinct?: DaoScalarFieldEnum | DaoScalarFieldEnum[]
  }


  /**
   * Dao create
   */
  export type DaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Dao.
     */
    data: XOR<DaoCreateInput, DaoUncheckedCreateInput>
  }


  /**
   * Dao update
   */
  export type DaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Dao.
     */
    data: XOR<DaoUpdateInput, DaoUncheckedUpdateInput>
    /**
     * Choose, which Dao to update.
     */
    where: DaoWhereUniqueInput
  }


  /**
   * Dao updateMany
   */
  export type DaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Daos.
     */
    data: XOR<DaoUpdateManyMutationInput, DaoUncheckedUpdateManyInput>
    /**
     * Filter which Daos to update
     */
    where?: DaoWhereInput
  }


  /**
   * Dao upsert
   */
  export type DaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Dao to update in case it exists.
     */
    where: DaoWhereUniqueInput
    /**
     * In case the Dao found by the `where` argument doesn't exist, create a new Dao with this data.
     */
    create: XOR<DaoCreateInput, DaoUncheckedCreateInput>
    /**
     * In case the Dao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DaoUpdateInput, DaoUncheckedUpdateInput>
  }


  /**
   * Dao delete
   */
  export type DaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    /**
     * Filter which Dao to delete.
     */
    where: DaoWhereUniqueInput
  }


  /**
   * Dao deleteMany
   */
  export type DaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Daos to delete
     */
    where?: DaoWhereInput
  }


  /**
   * Dao.parent
   */
  export type Dao$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    where?: DaoWhereInput
  }


  /**
   * Dao.children
   */
  export type Dao$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
    where?: DaoWhereInput
    orderBy?: DaoOrderByWithRelationInput | DaoOrderByWithRelationInput[]
    cursor?: DaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DaoScalarFieldEnum | DaoScalarFieldEnum[]
  }


  /**
   * Dao.portals
   */
  export type Dao$portalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    where?: PortalWhereInput
    orderBy?: PortalOrderByWithRelationInput | PortalOrderByWithRelationInput[]
    cursor?: PortalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortalScalarFieldEnum | PortalScalarFieldEnum[]
  }


  /**
   * Dao without action
   */
  export type DaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dao
     */
    select?: DaoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DaoInclude<ExtArgs> | null
  }



  /**
   * Model Portal
   */

  export type AggregatePortal = {
    _count: PortalCountAggregateOutputType | null
    _avg: PortalAvgAggregateOutputType | null
    _sum: PortalSumAggregateOutputType | null
    _min: PortalMinAggregateOutputType | null
    _max: PortalMaxAggregateOutputType | null
  }

  export type PortalAvgAggregateOutputType = {
    id: number | null
    daoId: number | null
  }

  export type PortalSumAggregateOutputType = {
    id: number | null
    daoId: number | null
  }

  export type PortalMinAggregateOutputType = {
    id: number | null
    daoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalMaxAggregateOutputType = {
    id: number | null
    daoId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PortalCountAggregateOutputType = {
    id: number
    daoId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PortalAvgAggregateInputType = {
    id?: true
    daoId?: true
  }

  export type PortalSumAggregateInputType = {
    id?: true
    daoId?: true
  }

  export type PortalMinAggregateInputType = {
    id?: true
    daoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalMaxAggregateInputType = {
    id?: true
    daoId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PortalCountAggregateInputType = {
    id?: true
    daoId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PortalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portal to aggregate.
     */
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     */
    orderBy?: PortalOrderByWithRelationInput | PortalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portals
    **/
    _count?: true | PortalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortalMaxAggregateInputType
  }

  export type GetPortalAggregateType<T extends PortalAggregateArgs> = {
        [P in keyof T & keyof AggregatePortal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortal[P]>
      : GetScalarType<T[P], AggregatePortal[P]>
  }




  export type PortalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortalWhereInput
    orderBy?: PortalOrderByWithAggregationInput | PortalOrderByWithAggregationInput[]
    by: PortalScalarFieldEnum[] | PortalScalarFieldEnum
    having?: PortalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortalCountAggregateInputType | true
    _avg?: PortalAvgAggregateInputType
    _sum?: PortalSumAggregateInputType
    _min?: PortalMinAggregateInputType
    _max?: PortalMaxAggregateInputType
  }

  export type PortalGroupByOutputType = {
    id: number
    daoId: number
    createdAt: Date
    updatedAt: Date
    _count: PortalCountAggregateOutputType | null
    _avg: PortalAvgAggregateOutputType | null
    _sum: PortalSumAggregateOutputType | null
    _min: PortalMinAggregateOutputType | null
    _max: PortalMaxAggregateOutputType | null
  }

  type GetPortalGroupByPayload<T extends PortalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortalGroupByOutputType[P]>
            : GetScalarType<T[P], PortalGroupByOutputType[P]>
        }
      >
    >


  export type PortalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    daoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dao?: boolean | DaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portal"]>

  export type PortalSelectScalar = {
    id?: boolean
    daoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PortalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dao?: boolean | DaoDefaultArgs<ExtArgs>
  }


  export type $PortalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portal"
    objects: {
      dao: Prisma.$DaoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      daoId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["portal"]>
    composites: {}
  }


  type PortalGetPayload<S extends boolean | null | undefined | PortalDefaultArgs> = $Result.GetResult<Prisma.$PortalPayload, S>

  type PortalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PortalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PortalCountAggregateInputType | true
    }

  export interface PortalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portal'], meta: { name: 'Portal' } }
    /**
     * Find zero or one Portal that matches the filter.
     * @param {PortalFindUniqueArgs} args - Arguments to find a Portal
     * @example
     * // Get one Portal
     * const portal = await prisma.portal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PortalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PortalFindUniqueArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Portal that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PortalFindUniqueOrThrowArgs} args - Arguments to find a Portal
     * @example
     * // Get one Portal
     * const portal = await prisma.portal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PortalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PortalFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Portal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFindFirstArgs} args - Arguments to find a Portal
     * @example
     * // Get one Portal
     * const portal = await prisma.portal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PortalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PortalFindFirstArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Portal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFindFirstOrThrowArgs} args - Arguments to find a Portal
     * @example
     * // Get one Portal
     * const portal = await prisma.portal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PortalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PortalFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Portals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portals
     * const portals = await prisma.portal.findMany()
     * 
     * // Get first 10 Portals
     * const portals = await prisma.portal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portalWithIdOnly = await prisma.portal.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PortalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PortalFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Portal.
     * @param {PortalCreateArgs} args - Arguments to create a Portal.
     * @example
     * // Create one Portal
     * const Portal = await prisma.portal.create({
     *   data: {
     *     // ... data to create a Portal
     *   }
     * })
     * 
    **/
    create<T extends PortalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PortalCreateArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Portal.
     * @param {PortalDeleteArgs} args - Arguments to delete one Portal.
     * @example
     * // Delete one Portal
     * const Portal = await prisma.portal.delete({
     *   where: {
     *     // ... filter to delete one Portal
     *   }
     * })
     * 
    **/
    delete<T extends PortalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PortalDeleteArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Portal.
     * @param {PortalUpdateArgs} args - Arguments to update one Portal.
     * @example
     * // Update one Portal
     * const portal = await prisma.portal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PortalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PortalUpdateArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Portals.
     * @param {PortalDeleteManyArgs} args - Arguments to filter Portals to delete.
     * @example
     * // Delete a few Portals
     * const { count } = await prisma.portal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PortalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PortalDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portals
     * const portal = await prisma.portal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PortalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PortalUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Portal.
     * @param {PortalUpsertArgs} args - Arguments to update or create a Portal.
     * @example
     * // Update or create a Portal
     * const portal = await prisma.portal.upsert({
     *   create: {
     *     // ... data to create a Portal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portal we want to update
     *   }
     * })
    **/
    upsert<T extends PortalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PortalUpsertArgs<ExtArgs>>
    ): Prisma__PortalClient<$Result.GetResult<Prisma.$PortalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Portals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalCountArgs} args - Arguments to filter Portals to count.
     * @example
     * // Count the number of Portals
     * const count = await prisma.portal.count({
     *   where: {
     *     // ... the filter for the Portals we want to count
     *   }
     * })
    **/
    count<T extends PortalCountArgs>(
      args?: Subset<T, PortalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortalAggregateArgs>(args: Subset<T, PortalAggregateArgs>): Prisma.PrismaPromise<GetPortalAggregateType<T>>

    /**
     * Group by Portal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortalGroupByArgs['orderBy'] }
        : { orderBy?: PortalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portal model
   */
  readonly fields: PortalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    dao<T extends DaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DaoDefaultArgs<ExtArgs>>): Prisma__DaoClient<$Result.GetResult<Prisma.$DaoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Portal model
   */ 
  interface PortalFieldRefs {
    readonly id: FieldRef<"Portal", 'Int'>
    readonly daoId: FieldRef<"Portal", 'Int'>
    readonly createdAt: FieldRef<"Portal", 'DateTime'>
    readonly updatedAt: FieldRef<"Portal", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Portal findUnique
   */
  export type PortalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * Filter, which Portal to fetch.
     */
    where: PortalWhereUniqueInput
  }


  /**
   * Portal findUniqueOrThrow
   */
  export type PortalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * Filter, which Portal to fetch.
     */
    where: PortalWhereUniqueInput
  }


  /**
   * Portal findFirst
   */
  export type PortalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * Filter, which Portal to fetch.
     */
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     */
    orderBy?: PortalOrderByWithRelationInput | PortalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portals.
     */
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portals.
     */
    distinct?: PortalScalarFieldEnum | PortalScalarFieldEnum[]
  }


  /**
   * Portal findFirstOrThrow
   */
  export type PortalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * Filter, which Portal to fetch.
     */
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     */
    orderBy?: PortalOrderByWithRelationInput | PortalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portals.
     */
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portals.
     */
    distinct?: PortalScalarFieldEnum | PortalScalarFieldEnum[]
  }


  /**
   * Portal findMany
   */
  export type PortalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * Filter, which Portals to fetch.
     */
    where?: PortalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portals to fetch.
     */
    orderBy?: PortalOrderByWithRelationInput | PortalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portals.
     */
    cursor?: PortalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portals.
     */
    skip?: number
    distinct?: PortalScalarFieldEnum | PortalScalarFieldEnum[]
  }


  /**
   * Portal create
   */
  export type PortalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * The data needed to create a Portal.
     */
    data: XOR<PortalCreateInput, PortalUncheckedCreateInput>
  }


  /**
   * Portal update
   */
  export type PortalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * The data needed to update a Portal.
     */
    data: XOR<PortalUpdateInput, PortalUncheckedUpdateInput>
    /**
     * Choose, which Portal to update.
     */
    where: PortalWhereUniqueInput
  }


  /**
   * Portal updateMany
   */
  export type PortalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portals.
     */
    data: XOR<PortalUpdateManyMutationInput, PortalUncheckedUpdateManyInput>
    /**
     * Filter which Portals to update
     */
    where?: PortalWhereInput
  }


  /**
   * Portal upsert
   */
  export type PortalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * The filter to search for the Portal to update in case it exists.
     */
    where: PortalWhereUniqueInput
    /**
     * In case the Portal found by the `where` argument doesn't exist, create a new Portal with this data.
     */
    create: XOR<PortalCreateInput, PortalUncheckedCreateInput>
    /**
     * In case the Portal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortalUpdateInput, PortalUncheckedUpdateInput>
  }


  /**
   * Portal delete
   */
  export type PortalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
    /**
     * Filter which Portal to delete.
     */
    where: PortalWhereUniqueInput
  }


  /**
   * Portal deleteMany
   */
  export type PortalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portals to delete
     */
    where?: PortalWhereInput
  }


  /**
   * Portal without action
   */
  export type PortalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portal
     */
    select?: PortalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PortalInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    hashedPassword: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    hashedPassword: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    hashedPassword: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memories?: boolean | User$memoriesArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memories?: boolean | User$memoriesArgs<ExtArgs>
    conversations?: boolean | User$conversationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      memories: Prisma.$UserMemoryPayload<ExtArgs>[]
      conversations: Prisma.$ConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      hashedPassword: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    memories<T extends User$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    conversations<T extends User$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, User$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * User.memories
   */
  export type User$memoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    where?: UserMemoryWhereInput
    orderBy?: UserMemoryOrderByWithRelationInput | UserMemoryOrderByWithRelationInput[]
    cursor?: UserMemoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserMemoryScalarFieldEnum | UserMemoryScalarFieldEnum[]
  }


  /**
   * User.conversations
   */
  export type User$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    cursor?: ConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type PermissionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    id?: true
  }

  export type PermissionSumAggregateInputType = {
    id?: true
  }

  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: number
    name: string
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    actions?: boolean | Permission$actionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    actions?: boolean | Permission$actionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      actions: Prisma.$DharmaActionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }


  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PermissionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Permission that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PermissionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PermissionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
    **/
    create<T extends PermissionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
    **/
    delete<T extends PermissionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PermissionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PermissionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PermissionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
    **/
    upsert<T extends PermissionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>
    ): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    actions<T extends Permission$actionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$actionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Permission model
   */ 
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'Int'>
    readonly name: FieldRef<"Permission", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }


  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }


  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }


  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
  }


  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Permission.actions
   */
  export type Permission$actionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    where?: DharmaActionWhereInput
    orderBy?: DharmaActionOrderByWithRelationInput | DharmaActionOrderByWithRelationInput[]
    cursor?: DharmaActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DharmaActionScalarFieldEnum | DharmaActionScalarFieldEnum[]
  }


  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
  }



  /**
   * Model DharmaAction
   */

  export type AggregateDharmaAction = {
    _count: DharmaActionCountAggregateOutputType | null
    _avg: DharmaActionAvgAggregateOutputType | null
    _sum: DharmaActionSumAggregateOutputType | null
    _min: DharmaActionMinAggregateOutputType | null
    _max: DharmaActionMaxAggregateOutputType | null
  }

  export type DharmaActionAvgAggregateOutputType = {
    id: number | null
  }

  export type DharmaActionSumAggregateOutputType = {
    id: number | null
  }

  export type DharmaActionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DharmaActionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DharmaActionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DharmaActionAvgAggregateInputType = {
    id?: true
  }

  export type DharmaActionSumAggregateInputType = {
    id?: true
  }

  export type DharmaActionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DharmaActionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DharmaActionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DharmaActionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DharmaAction to aggregate.
     */
    where?: DharmaActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaActions to fetch.
     */
    orderBy?: DharmaActionOrderByWithRelationInput | DharmaActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DharmaActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DharmaActions
    **/
    _count?: true | DharmaActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DharmaActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DharmaActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DharmaActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DharmaActionMaxAggregateInputType
  }

  export type GetDharmaActionAggregateType<T extends DharmaActionAggregateArgs> = {
        [P in keyof T & keyof AggregateDharmaAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDharmaAction[P]>
      : GetScalarType<T[P], AggregateDharmaAction[P]>
  }




  export type DharmaActionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DharmaActionWhereInput
    orderBy?: DharmaActionOrderByWithAggregationInput | DharmaActionOrderByWithAggregationInput[]
    by: DharmaActionScalarFieldEnum[] | DharmaActionScalarFieldEnum
    having?: DharmaActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DharmaActionCountAggregateInputType | true
    _avg?: DharmaActionAvgAggregateInputType
    _sum?: DharmaActionSumAggregateInputType
    _min?: DharmaActionMinAggregateInputType
    _max?: DharmaActionMaxAggregateInputType
  }

  export type DharmaActionGroupByOutputType = {
    id: number
    name: string
    _count: DharmaActionCountAggregateOutputType | null
    _avg: DharmaActionAvgAggregateOutputType | null
    _sum: DharmaActionSumAggregateOutputType | null
    _min: DharmaActionMinAggregateOutputType | null
    _max: DharmaActionMaxAggregateOutputType | null
  }

  type GetDharmaActionGroupByPayload<T extends DharmaActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DharmaActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DharmaActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DharmaActionGroupByOutputType[P]>
            : GetScalarType<T[P], DharmaActionGroupByOutputType[P]>
        }
      >
    >


  export type DharmaActionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    permissions?: boolean | DharmaAction$permissionsArgs<ExtArgs>
    _count?: boolean | DharmaActionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dharmaAction"]>

  export type DharmaActionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DharmaActionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | DharmaAction$permissionsArgs<ExtArgs>
    _count?: boolean | DharmaActionCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DharmaActionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DharmaAction"
    objects: {
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["dharmaAction"]>
    composites: {}
  }


  type DharmaActionGetPayload<S extends boolean | null | undefined | DharmaActionDefaultArgs> = $Result.GetResult<Prisma.$DharmaActionPayload, S>

  type DharmaActionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DharmaActionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DharmaActionCountAggregateInputType | true
    }

  export interface DharmaActionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DharmaAction'], meta: { name: 'DharmaAction' } }
    /**
     * Find zero or one DharmaAction that matches the filter.
     * @param {DharmaActionFindUniqueArgs} args - Arguments to find a DharmaAction
     * @example
     * // Get one DharmaAction
     * const dharmaAction = await prisma.dharmaAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DharmaActionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaActionFindUniqueArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DharmaAction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DharmaActionFindUniqueOrThrowArgs} args - Arguments to find a DharmaAction
     * @example
     * // Get one DharmaAction
     * const dharmaAction = await prisma.dharmaAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DharmaActionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaActionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DharmaAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionFindFirstArgs} args - Arguments to find a DharmaAction
     * @example
     * // Get one DharmaAction
     * const dharmaAction = await prisma.dharmaAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DharmaActionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaActionFindFirstArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DharmaAction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionFindFirstOrThrowArgs} args - Arguments to find a DharmaAction
     * @example
     * // Get one DharmaAction
     * const dharmaAction = await prisma.dharmaAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DharmaActionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaActionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DharmaActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DharmaActions
     * const dharmaActions = await prisma.dharmaAction.findMany()
     * 
     * // Get first 10 DharmaActions
     * const dharmaActions = await prisma.dharmaAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dharmaActionWithIdOnly = await prisma.dharmaAction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DharmaActionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaActionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DharmaAction.
     * @param {DharmaActionCreateArgs} args - Arguments to create a DharmaAction.
     * @example
     * // Create one DharmaAction
     * const DharmaAction = await prisma.dharmaAction.create({
     *   data: {
     *     // ... data to create a DharmaAction
     *   }
     * })
     * 
    **/
    create<T extends DharmaActionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaActionCreateArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a DharmaAction.
     * @param {DharmaActionDeleteArgs} args - Arguments to delete one DharmaAction.
     * @example
     * // Delete one DharmaAction
     * const DharmaAction = await prisma.dharmaAction.delete({
     *   where: {
     *     // ... filter to delete one DharmaAction
     *   }
     * })
     * 
    **/
    delete<T extends DharmaActionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaActionDeleteArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DharmaAction.
     * @param {DharmaActionUpdateArgs} args - Arguments to update one DharmaAction.
     * @example
     * // Update one DharmaAction
     * const dharmaAction = await prisma.dharmaAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DharmaActionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaActionUpdateArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DharmaActions.
     * @param {DharmaActionDeleteManyArgs} args - Arguments to filter DharmaActions to delete.
     * @example
     * // Delete a few DharmaActions
     * const { count } = await prisma.dharmaAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DharmaActionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaActionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DharmaActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DharmaActions
     * const dharmaAction = await prisma.dharmaAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DharmaActionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaActionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DharmaAction.
     * @param {DharmaActionUpsertArgs} args - Arguments to update or create a DharmaAction.
     * @example
     * // Update or create a DharmaAction
     * const dharmaAction = await prisma.dharmaAction.upsert({
     *   create: {
     *     // ... data to create a DharmaAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DharmaAction we want to update
     *   }
     * })
    **/
    upsert<T extends DharmaActionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaActionUpsertArgs<ExtArgs>>
    ): Prisma__DharmaActionClient<$Result.GetResult<Prisma.$DharmaActionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DharmaActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionCountArgs} args - Arguments to filter DharmaActions to count.
     * @example
     * // Count the number of DharmaActions
     * const count = await prisma.dharmaAction.count({
     *   where: {
     *     // ... the filter for the DharmaActions we want to count
     *   }
     * })
    **/
    count<T extends DharmaActionCountArgs>(
      args?: Subset<T, DharmaActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DharmaActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DharmaAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DharmaActionAggregateArgs>(args: Subset<T, DharmaActionAggregateArgs>): Prisma.PrismaPromise<GetDharmaActionAggregateType<T>>

    /**
     * Group by DharmaAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DharmaActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DharmaActionGroupByArgs['orderBy'] }
        : { orderBy?: DharmaActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DharmaActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDharmaActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DharmaAction model
   */
  readonly fields: DharmaActionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DharmaAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DharmaActionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    permissions<T extends DharmaAction$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, DharmaAction$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the DharmaAction model
   */ 
  interface DharmaActionFieldRefs {
    readonly id: FieldRef<"DharmaAction", 'Int'>
    readonly name: FieldRef<"DharmaAction", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DharmaAction findUnique
   */
  export type DharmaActionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * Filter, which DharmaAction to fetch.
     */
    where: DharmaActionWhereUniqueInput
  }


  /**
   * DharmaAction findUniqueOrThrow
   */
  export type DharmaActionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * Filter, which DharmaAction to fetch.
     */
    where: DharmaActionWhereUniqueInput
  }


  /**
   * DharmaAction findFirst
   */
  export type DharmaActionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * Filter, which DharmaAction to fetch.
     */
    where?: DharmaActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaActions to fetch.
     */
    orderBy?: DharmaActionOrderByWithRelationInput | DharmaActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DharmaActions.
     */
    cursor?: DharmaActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DharmaActions.
     */
    distinct?: DharmaActionScalarFieldEnum | DharmaActionScalarFieldEnum[]
  }


  /**
   * DharmaAction findFirstOrThrow
   */
  export type DharmaActionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * Filter, which DharmaAction to fetch.
     */
    where?: DharmaActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaActions to fetch.
     */
    orderBy?: DharmaActionOrderByWithRelationInput | DharmaActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DharmaActions.
     */
    cursor?: DharmaActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DharmaActions.
     */
    distinct?: DharmaActionScalarFieldEnum | DharmaActionScalarFieldEnum[]
  }


  /**
   * DharmaAction findMany
   */
  export type DharmaActionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * Filter, which DharmaActions to fetch.
     */
    where?: DharmaActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaActions to fetch.
     */
    orderBy?: DharmaActionOrderByWithRelationInput | DharmaActionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DharmaActions.
     */
    cursor?: DharmaActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaActions.
     */
    skip?: number
    distinct?: DharmaActionScalarFieldEnum | DharmaActionScalarFieldEnum[]
  }


  /**
   * DharmaAction create
   */
  export type DharmaActionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * The data needed to create a DharmaAction.
     */
    data: XOR<DharmaActionCreateInput, DharmaActionUncheckedCreateInput>
  }


  /**
   * DharmaAction update
   */
  export type DharmaActionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * The data needed to update a DharmaAction.
     */
    data: XOR<DharmaActionUpdateInput, DharmaActionUncheckedUpdateInput>
    /**
     * Choose, which DharmaAction to update.
     */
    where: DharmaActionWhereUniqueInput
  }


  /**
   * DharmaAction updateMany
   */
  export type DharmaActionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DharmaActions.
     */
    data: XOR<DharmaActionUpdateManyMutationInput, DharmaActionUncheckedUpdateManyInput>
    /**
     * Filter which DharmaActions to update
     */
    where?: DharmaActionWhereInput
  }


  /**
   * DharmaAction upsert
   */
  export type DharmaActionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * The filter to search for the DharmaAction to update in case it exists.
     */
    where: DharmaActionWhereUniqueInput
    /**
     * In case the DharmaAction found by the `where` argument doesn't exist, create a new DharmaAction with this data.
     */
    create: XOR<DharmaActionCreateInput, DharmaActionUncheckedCreateInput>
    /**
     * In case the DharmaAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DharmaActionUpdateInput, DharmaActionUncheckedUpdateInput>
  }


  /**
   * DharmaAction delete
   */
  export type DharmaActionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
    /**
     * Filter which DharmaAction to delete.
     */
    where: DharmaActionWhereUniqueInput
  }


  /**
   * DharmaAction deleteMany
   */
  export type DharmaActionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DharmaActions to delete
     */
    where?: DharmaActionWhereInput
  }


  /**
   * DharmaAction.permissions
   */
  export type DharmaAction$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }


  /**
   * DharmaAction without action
   */
  export type DharmaActionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaAction
     */
    select?: DharmaActionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DharmaActionInclude<ExtArgs> | null
  }



  /**
   * Model Conversation
   */

  export type AggregateConversation = {
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  export type ConversationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    dharmabeingId: number | null
  }

  export type ConversationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    dharmabeingId: number | null
  }

  export type ConversationMinAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    dharmabeingId: number | null
  }

  export type ConversationMaxAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
    dharmabeingId: number | null
  }

  export type ConversationCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    dharmabeingId: number
    _all: number
  }


  export type ConversationAvgAggregateInputType = {
    id?: true
    userId?: true
    dharmabeingId?: true
  }

  export type ConversationSumAggregateInputType = {
    id?: true
    userId?: true
    dharmabeingId?: true
  }

  export type ConversationMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    dharmabeingId?: true
  }

  export type ConversationMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    dharmabeingId?: true
  }

  export type ConversationCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    dharmabeingId?: true
    _all?: true
  }

  export type ConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversation to aggregate.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conversations
    **/
    _count?: true | ConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConversationMaxAggregateInputType
  }

  export type GetConversationAggregateType<T extends ConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversation[P]>
      : GetScalarType<T[P], AggregateConversation[P]>
  }




  export type ConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConversationWhereInput
    orderBy?: ConversationOrderByWithAggregationInput | ConversationOrderByWithAggregationInput[]
    by: ConversationScalarFieldEnum[] | ConversationScalarFieldEnum
    having?: ConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConversationCountAggregateInputType | true
    _avg?: ConversationAvgAggregateInputType
    _sum?: ConversationSumAggregateInputType
    _min?: ConversationMinAggregateInputType
    _max?: ConversationMaxAggregateInputType
  }

  export type ConversationGroupByOutputType = {
    id: number
    content: string
    userId: number
    dharmabeingId: number
    _count: ConversationCountAggregateOutputType | null
    _avg: ConversationAvgAggregateOutputType | null
    _sum: ConversationSumAggregateOutputType | null
    _min: ConversationMinAggregateOutputType | null
    _max: ConversationMaxAggregateOutputType | null
  }

  type GetConversationGroupByPayload<T extends ConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConversationGroupByOutputType[P]>
            : GetScalarType<T[P], ConversationGroupByOutputType[P]>
        }
      >
    >


  export type ConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    dharmabeingId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    dharmabeing?: boolean | DharmabeingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conversation"]>

  export type ConversationSelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
    dharmabeingId?: boolean
  }

  export type ConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    dharmabeing?: boolean | DharmabeingDefaultArgs<ExtArgs>
  }


  export type $ConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conversation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      dharmabeing: Prisma.$DharmabeingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      userId: number
      dharmabeingId: number
    }, ExtArgs["result"]["conversation"]>
    composites: {}
  }


  type ConversationGetPayload<S extends boolean | null | undefined | ConversationDefaultArgs> = $Result.GetResult<Prisma.$ConversationPayload, S>

  type ConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ConversationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConversationCountAggregateInputType | true
    }

  export interface ConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conversation'], meta: { name: 'Conversation' } }
    /**
     * Find zero or one Conversation that matches the filter.
     * @param {ConversationFindUniqueArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ConversationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationFindUniqueArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Conversation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ConversationFindUniqueOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ConversationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Conversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ConversationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Conversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindFirstOrThrowArgs} args - Arguments to find a Conversation
     * @example
     * // Get one Conversation
     * const conversation = await prisma.conversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ConversationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Conversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversations
     * const conversations = await prisma.conversation.findMany()
     * 
     * // Get first 10 Conversations
     * const conversations = await prisma.conversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conversationWithIdOnly = await prisma.conversation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ConversationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Conversation.
     * @param {ConversationCreateArgs} args - Arguments to create a Conversation.
     * @example
     * // Create one Conversation
     * const Conversation = await prisma.conversation.create({
     *   data: {
     *     // ... data to create a Conversation
     *   }
     * })
     * 
    **/
    create<T extends ConversationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationCreateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Conversation.
     * @param {ConversationDeleteArgs} args - Arguments to delete one Conversation.
     * @example
     * // Delete one Conversation
     * const Conversation = await prisma.conversation.delete({
     *   where: {
     *     // ... filter to delete one Conversation
     *   }
     * })
     * 
    **/
    delete<T extends ConversationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationDeleteArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Conversation.
     * @param {ConversationUpdateArgs} args - Arguments to update one Conversation.
     * @example
     * // Update one Conversation
     * const conversation = await prisma.conversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ConversationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Conversations.
     * @param {ConversationDeleteManyArgs} args - Arguments to filter Conversations to delete.
     * @example
     * // Delete a few Conversations
     * const { count } = await prisma.conversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ConversationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ConversationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversations
     * const conversation = await prisma.conversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ConversationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Conversation.
     * @param {ConversationUpsertArgs} args - Arguments to update or create a Conversation.
     * @example
     * // Update or create a Conversation
     * const conversation = await prisma.conversation.upsert({
     *   create: {
     *     // ... data to create a Conversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversation we want to update
     *   }
     * })
    **/
    upsert<T extends ConversationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ConversationUpsertArgs<ExtArgs>>
    ): Prisma__ConversationClient<$Result.GetResult<Prisma.$ConversationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Conversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationCountArgs} args - Arguments to filter Conversations to count.
     * @example
     * // Count the number of Conversations
     * const count = await prisma.conversation.count({
     *   where: {
     *     // ... the filter for the Conversations we want to count
     *   }
     * })
    **/
    count<T extends ConversationCountArgs>(
      args?: Subset<T, ConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConversationAggregateArgs>(args: Subset<T, ConversationAggregateArgs>): Prisma.PrismaPromise<GetConversationAggregateType<T>>

    /**
     * Group by Conversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConversationGroupByArgs['orderBy'] }
        : { orderBy?: ConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conversation model
   */
  readonly fields: ConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    dharmabeing<T extends DharmabeingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DharmabeingDefaultArgs<ExtArgs>>): Prisma__DharmabeingClient<$Result.GetResult<Prisma.$DharmabeingPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Conversation model
   */ 
  interface ConversationFieldRefs {
    readonly id: FieldRef<"Conversation", 'Int'>
    readonly content: FieldRef<"Conversation", 'String'>
    readonly userId: FieldRef<"Conversation", 'Int'>
    readonly dharmabeingId: FieldRef<"Conversation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Conversation findUnique
   */
  export type ConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findUniqueOrThrow
   */
  export type ConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation findFirst
   */
  export type ConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findFirstOrThrow
   */
  export type ConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversation to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conversations.
     */
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation findMany
   */
  export type ConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter, which Conversations to fetch.
     */
    where?: ConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conversations to fetch.
     */
    orderBy?: ConversationOrderByWithRelationInput | ConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conversations.
     */
    cursor?: ConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conversations.
     */
    skip?: number
    distinct?: ConversationScalarFieldEnum | ConversationScalarFieldEnum[]
  }


  /**
   * Conversation create
   */
  export type ConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a Conversation.
     */
    data: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
  }


  /**
   * Conversation update
   */
  export type ConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a Conversation.
     */
    data: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
    /**
     * Choose, which Conversation to update.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation updateMany
   */
  export type ConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conversations.
     */
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyInput>
    /**
     * Filter which Conversations to update
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation upsert
   */
  export type ConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the Conversation to update in case it exists.
     */
    where: ConversationWhereUniqueInput
    /**
     * In case the Conversation found by the `where` argument doesn't exist, create a new Conversation with this data.
     */
    create: XOR<ConversationCreateInput, ConversationUncheckedCreateInput>
    /**
     * In case the Conversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConversationUpdateInput, ConversationUncheckedUpdateInput>
  }


  /**
   * Conversation delete
   */
  export type ConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
    /**
     * Filter which Conversation to delete.
     */
    where: ConversationWhereUniqueInput
  }


  /**
   * Conversation deleteMany
   */
  export type ConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conversations to delete
     */
    where?: ConversationWhereInput
  }


  /**
   * Conversation without action
   */
  export type ConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conversation
     */
    select?: ConversationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ConversationInclude<ExtArgs> | null
  }



  /**
   * Model UserMemory
   */

  export type AggregateUserMemory = {
    _count: UserMemoryCountAggregateOutputType | null
    _avg: UserMemoryAvgAggregateOutputType | null
    _sum: UserMemorySumAggregateOutputType | null
    _min: UserMemoryMinAggregateOutputType | null
    _max: UserMemoryMaxAggregateOutputType | null
  }

  export type UserMemoryAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserMemorySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserMemoryMinAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
  }

  export type UserMemoryMaxAggregateOutputType = {
    id: number | null
    content: string | null
    userId: number | null
  }

  export type UserMemoryCountAggregateOutputType = {
    id: number
    content: number
    userId: number
    _all: number
  }


  export type UserMemoryAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserMemorySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserMemoryMinAggregateInputType = {
    id?: true
    content?: true
    userId?: true
  }

  export type UserMemoryMaxAggregateInputType = {
    id?: true
    content?: true
    userId?: true
  }

  export type UserMemoryCountAggregateInputType = {
    id?: true
    content?: true
    userId?: true
    _all?: true
  }

  export type UserMemoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMemory to aggregate.
     */
    where?: UserMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMemories to fetch.
     */
    orderBy?: UserMemoryOrderByWithRelationInput | UserMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMemories
    **/
    _count?: true | UserMemoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMemoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMemorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMemoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMemoryMaxAggregateInputType
  }

  export type GetUserMemoryAggregateType<T extends UserMemoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMemory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMemory[P]>
      : GetScalarType<T[P], AggregateUserMemory[P]>
  }




  export type UserMemoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMemoryWhereInput
    orderBy?: UserMemoryOrderByWithAggregationInput | UserMemoryOrderByWithAggregationInput[]
    by: UserMemoryScalarFieldEnum[] | UserMemoryScalarFieldEnum
    having?: UserMemoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMemoryCountAggregateInputType | true
    _avg?: UserMemoryAvgAggregateInputType
    _sum?: UserMemorySumAggregateInputType
    _min?: UserMemoryMinAggregateInputType
    _max?: UserMemoryMaxAggregateInputType
  }

  export type UserMemoryGroupByOutputType = {
    id: number
    content: string
    userId: number
    _count: UserMemoryCountAggregateOutputType | null
    _avg: UserMemoryAvgAggregateOutputType | null
    _sum: UserMemorySumAggregateOutputType | null
    _min: UserMemoryMinAggregateOutputType | null
    _max: UserMemoryMaxAggregateOutputType | null
  }

  type GetUserMemoryGroupByPayload<T extends UserMemoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMemoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMemoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMemoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserMemoryGroupByOutputType[P]>
        }
      >
    >


  export type UserMemorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMemory"]>

  export type UserMemorySelectScalar = {
    id?: boolean
    content?: boolean
    userId?: boolean
  }

  export type UserMemoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $UserMemoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMemory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      userId: number
    }, ExtArgs["result"]["userMemory"]>
    composites: {}
  }


  type UserMemoryGetPayload<S extends boolean | null | undefined | UserMemoryDefaultArgs> = $Result.GetResult<Prisma.$UserMemoryPayload, S>

  type UserMemoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserMemoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserMemoryCountAggregateInputType | true
    }

  export interface UserMemoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMemory'], meta: { name: 'UserMemory' } }
    /**
     * Find zero or one UserMemory that matches the filter.
     * @param {UserMemoryFindUniqueArgs} args - Arguments to find a UserMemory
     * @example
     * // Get one UserMemory
     * const userMemory = await prisma.userMemory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserMemoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserMemoryFindUniqueArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserMemory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserMemoryFindUniqueOrThrowArgs} args - Arguments to find a UserMemory
     * @example
     * // Get one UserMemory
     * const userMemory = await prisma.userMemory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserMemoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMemoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserMemory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryFindFirstArgs} args - Arguments to find a UserMemory
     * @example
     * // Get one UserMemory
     * const userMemory = await prisma.userMemory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserMemoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMemoryFindFirstArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserMemory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryFindFirstOrThrowArgs} args - Arguments to find a UserMemory
     * @example
     * // Get one UserMemory
     * const userMemory = await prisma.userMemory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserMemoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMemoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserMemories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMemories
     * const userMemories = await prisma.userMemory.findMany()
     * 
     * // Get first 10 UserMemories
     * const userMemories = await prisma.userMemory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userMemoryWithIdOnly = await prisma.userMemory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserMemoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMemoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserMemory.
     * @param {UserMemoryCreateArgs} args - Arguments to create a UserMemory.
     * @example
     * // Create one UserMemory
     * const UserMemory = await prisma.userMemory.create({
     *   data: {
     *     // ... data to create a UserMemory
     *   }
     * })
     * 
    **/
    create<T extends UserMemoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserMemoryCreateArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a UserMemory.
     * @param {UserMemoryDeleteArgs} args - Arguments to delete one UserMemory.
     * @example
     * // Delete one UserMemory
     * const UserMemory = await prisma.userMemory.delete({
     *   where: {
     *     // ... filter to delete one UserMemory
     *   }
     * })
     * 
    **/
    delete<T extends UserMemoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserMemoryDeleteArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserMemory.
     * @param {UserMemoryUpdateArgs} args - Arguments to update one UserMemory.
     * @example
     * // Update one UserMemory
     * const userMemory = await prisma.userMemory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserMemoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserMemoryUpdateArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserMemories.
     * @param {UserMemoryDeleteManyArgs} args - Arguments to filter UserMemories to delete.
     * @example
     * // Delete a few UserMemories
     * const { count } = await prisma.userMemory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserMemoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserMemoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMemories
     * const userMemory = await prisma.userMemory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserMemoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserMemoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserMemory.
     * @param {UserMemoryUpsertArgs} args - Arguments to update or create a UserMemory.
     * @example
     * // Update or create a UserMemory
     * const userMemory = await prisma.userMemory.upsert({
     *   create: {
     *     // ... data to create a UserMemory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMemory we want to update
     *   }
     * })
    **/
    upsert<T extends UserMemoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserMemoryUpsertArgs<ExtArgs>>
    ): Prisma__UserMemoryClient<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserMemories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryCountArgs} args - Arguments to filter UserMemories to count.
     * @example
     * // Count the number of UserMemories
     * const count = await prisma.userMemory.count({
     *   where: {
     *     // ... the filter for the UserMemories we want to count
     *   }
     * })
    **/
    count<T extends UserMemoryCountArgs>(
      args?: Subset<T, UserMemoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMemoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMemoryAggregateArgs>(args: Subset<T, UserMemoryAggregateArgs>): Prisma.PrismaPromise<GetUserMemoryAggregateType<T>>

    /**
     * Group by UserMemory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMemoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMemoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMemoryGroupByArgs['orderBy'] }
        : { orderBy?: UserMemoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMemoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMemoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMemory model
   */
  readonly fields: UserMemoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMemory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMemoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserMemory model
   */ 
  interface UserMemoryFieldRefs {
    readonly id: FieldRef<"UserMemory", 'Int'>
    readonly content: FieldRef<"UserMemory", 'String'>
    readonly userId: FieldRef<"UserMemory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserMemory findUnique
   */
  export type UserMemoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * Filter, which UserMemory to fetch.
     */
    where: UserMemoryWhereUniqueInput
  }


  /**
   * UserMemory findUniqueOrThrow
   */
  export type UserMemoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * Filter, which UserMemory to fetch.
     */
    where: UserMemoryWhereUniqueInput
  }


  /**
   * UserMemory findFirst
   */
  export type UserMemoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * Filter, which UserMemory to fetch.
     */
    where?: UserMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMemories to fetch.
     */
    orderBy?: UserMemoryOrderByWithRelationInput | UserMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMemories.
     */
    cursor?: UserMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMemories.
     */
    distinct?: UserMemoryScalarFieldEnum | UserMemoryScalarFieldEnum[]
  }


  /**
   * UserMemory findFirstOrThrow
   */
  export type UserMemoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * Filter, which UserMemory to fetch.
     */
    where?: UserMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMemories to fetch.
     */
    orderBy?: UserMemoryOrderByWithRelationInput | UserMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMemories.
     */
    cursor?: UserMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMemories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMemories.
     */
    distinct?: UserMemoryScalarFieldEnum | UserMemoryScalarFieldEnum[]
  }


  /**
   * UserMemory findMany
   */
  export type UserMemoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * Filter, which UserMemories to fetch.
     */
    where?: UserMemoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMemories to fetch.
     */
    orderBy?: UserMemoryOrderByWithRelationInput | UserMemoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMemories.
     */
    cursor?: UserMemoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMemories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMemories.
     */
    skip?: number
    distinct?: UserMemoryScalarFieldEnum | UserMemoryScalarFieldEnum[]
  }


  /**
   * UserMemory create
   */
  export type UserMemoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMemory.
     */
    data: XOR<UserMemoryCreateInput, UserMemoryUncheckedCreateInput>
  }


  /**
   * UserMemory update
   */
  export type UserMemoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMemory.
     */
    data: XOR<UserMemoryUpdateInput, UserMemoryUncheckedUpdateInput>
    /**
     * Choose, which UserMemory to update.
     */
    where: UserMemoryWhereUniqueInput
  }


  /**
   * UserMemory updateMany
   */
  export type UserMemoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMemories.
     */
    data: XOR<UserMemoryUpdateManyMutationInput, UserMemoryUncheckedUpdateManyInput>
    /**
     * Filter which UserMemories to update
     */
    where?: UserMemoryWhereInput
  }


  /**
   * UserMemory upsert
   */
  export type UserMemoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMemory to update in case it exists.
     */
    where: UserMemoryWhereUniqueInput
    /**
     * In case the UserMemory found by the `where` argument doesn't exist, create a new UserMemory with this data.
     */
    create: XOR<UserMemoryCreateInput, UserMemoryUncheckedCreateInput>
    /**
     * In case the UserMemory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMemoryUpdateInput, UserMemoryUncheckedUpdateInput>
  }


  /**
   * UserMemory delete
   */
  export type UserMemoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
    /**
     * Filter which UserMemory to delete.
     */
    where: UserMemoryWhereUniqueInput
  }


  /**
   * UserMemory deleteMany
   */
  export type UserMemoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMemories to delete
     */
    where?: UserMemoryWhereInput
  }


  /**
   * UserMemory without action
   */
  export type UserMemoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMemory
     */
    select?: UserMemorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserMemoryInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: number | null
    expiresAt: Date | null
    hashedSessionToken: string | null
    antiCSRFToken: string | null
    publicData: string | null
    privateData: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: number | null
    expiresAt: Date | null
    hashedSessionToken: string | null
    antiCSRFToken: string | null
    publicData: string | null
    privateData: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    hashedSessionToken: number
    antiCSRFToken: number
    publicData: number
    privateData: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    hashedSessionToken?: true
    antiCSRFToken?: true
    publicData?: true
    privateData?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    hashedSessionToken?: true
    antiCSRFToken?: true
    publicData?: true
    privateData?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    hashedSessionToken?: true
    antiCSRFToken?: true
    publicData?: true
    privateData?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: number
    expiresAt: Date
    hashedSessionToken: string
    antiCSRFToken: string
    publicData: string | null
    privateData: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    hashedSessionToken?: boolean
    antiCSRFToken?: boolean
    publicData?: boolean
    privateData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    hashedSessionToken?: boolean
    antiCSRFToken?: boolean
    publicData?: boolean
    privateData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      expiresAt: Date
      hashedSessionToken: string
      antiCSRFToken: string
      publicData: string | null
      privateData: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'Int'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly hashedSessionToken: FieldRef<"Session", 'String'>
    readonly antiCSRFToken: FieldRef<"Session", 'String'>
    readonly publicData: FieldRef<"Session", 'String'>
    readonly privateData: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly userId: FieldRef<"Session", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model Database
   */

  export type AggregateDatabase = {
    _count: DatabaseCountAggregateOutputType | null
    _avg: DatabaseAvgAggregateOutputType | null
    _sum: DatabaseSumAggregateOutputType | null
    _min: DatabaseMinAggregateOutputType | null
    _max: DatabaseMaxAggregateOutputType | null
  }

  export type DatabaseAvgAggregateOutputType = {
    id: number | null
  }

  export type DatabaseSumAggregateOutputType = {
    id: number | null
  }

  export type DatabaseMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DatabaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type DatabaseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DatabaseAvgAggregateInputType = {
    id?: true
  }

  export type DatabaseSumAggregateInputType = {
    id?: true
  }

  export type DatabaseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DatabaseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DatabaseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DatabaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Database to aggregate.
     */
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     */
    orderBy?: DatabaseOrderByWithRelationInput | DatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Databases
    **/
    _count?: true | DatabaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DatabaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DatabaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatabaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatabaseMaxAggregateInputType
  }

  export type GetDatabaseAggregateType<T extends DatabaseAggregateArgs> = {
        [P in keyof T & keyof AggregateDatabase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatabase[P]>
      : GetScalarType<T[P], AggregateDatabase[P]>
  }




  export type DatabaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatabaseWhereInput
    orderBy?: DatabaseOrderByWithAggregationInput | DatabaseOrderByWithAggregationInput[]
    by: DatabaseScalarFieldEnum[] | DatabaseScalarFieldEnum
    having?: DatabaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatabaseCountAggregateInputType | true
    _avg?: DatabaseAvgAggregateInputType
    _sum?: DatabaseSumAggregateInputType
    _min?: DatabaseMinAggregateInputType
    _max?: DatabaseMaxAggregateInputType
  }

  export type DatabaseGroupByOutputType = {
    id: number
    name: string
    _count: DatabaseCountAggregateOutputType | null
    _avg: DatabaseAvgAggregateOutputType | null
    _sum: DatabaseSumAggregateOutputType | null
    _min: DatabaseMinAggregateOutputType | null
    _max: DatabaseMaxAggregateOutputType | null
  }

  type GetDatabaseGroupByPayload<T extends DatabaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatabaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatabaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatabaseGroupByOutputType[P]>
            : GetScalarType<T[P], DatabaseGroupByOutputType[P]>
        }
      >
    >


  export type DatabaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    models?: boolean | Database$modelsArgs<ExtArgs>
    _count?: boolean | DatabaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["database"]>

  export type DatabaseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DatabaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | Database$modelsArgs<ExtArgs>
    _count?: boolean | DatabaseCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DatabasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Database"
    objects: {
      models: Prisma.$ModelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["database"]>
    composites: {}
  }


  type DatabaseGetPayload<S extends boolean | null | undefined | DatabaseDefaultArgs> = $Result.GetResult<Prisma.$DatabasePayload, S>

  type DatabaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DatabaseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DatabaseCountAggregateInputType | true
    }

  export interface DatabaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Database'], meta: { name: 'Database' } }
    /**
     * Find zero or one Database that matches the filter.
     * @param {DatabaseFindUniqueArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DatabaseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DatabaseFindUniqueArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Database that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DatabaseFindUniqueOrThrowArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DatabaseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DatabaseFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Database that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseFindFirstArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DatabaseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DatabaseFindFirstArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Database that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseFindFirstOrThrowArgs} args - Arguments to find a Database
     * @example
     * // Get one Database
     * const database = await prisma.database.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DatabaseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DatabaseFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Databases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Databases
     * const databases = await prisma.database.findMany()
     * 
     * // Get first 10 Databases
     * const databases = await prisma.database.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const databaseWithIdOnly = await prisma.database.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DatabaseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatabaseFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Database.
     * @param {DatabaseCreateArgs} args - Arguments to create a Database.
     * @example
     * // Create one Database
     * const Database = await prisma.database.create({
     *   data: {
     *     // ... data to create a Database
     *   }
     * })
     * 
    **/
    create<T extends DatabaseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DatabaseCreateArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Database.
     * @param {DatabaseDeleteArgs} args - Arguments to delete one Database.
     * @example
     * // Delete one Database
     * const Database = await prisma.database.delete({
     *   where: {
     *     // ... filter to delete one Database
     *   }
     * })
     * 
    **/
    delete<T extends DatabaseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DatabaseDeleteArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Database.
     * @param {DatabaseUpdateArgs} args - Arguments to update one Database.
     * @example
     * // Update one Database
     * const database = await prisma.database.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DatabaseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DatabaseUpdateArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Databases.
     * @param {DatabaseDeleteManyArgs} args - Arguments to filter Databases to delete.
     * @example
     * // Delete a few Databases
     * const { count } = await prisma.database.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DatabaseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DatabaseDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Databases
     * const database = await prisma.database.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DatabaseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DatabaseUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Database.
     * @param {DatabaseUpsertArgs} args - Arguments to update or create a Database.
     * @example
     * // Update or create a Database
     * const database = await prisma.database.upsert({
     *   create: {
     *     // ... data to create a Database
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Database we want to update
     *   }
     * })
    **/
    upsert<T extends DatabaseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DatabaseUpsertArgs<ExtArgs>>
    ): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Databases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseCountArgs} args - Arguments to filter Databases to count.
     * @example
     * // Count the number of Databases
     * const count = await prisma.database.count({
     *   where: {
     *     // ... the filter for the Databases we want to count
     *   }
     * })
    **/
    count<T extends DatabaseCountArgs>(
      args?: Subset<T, DatabaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatabaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Database.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatabaseAggregateArgs>(args: Subset<T, DatabaseAggregateArgs>): Prisma.PrismaPromise<GetDatabaseAggregateType<T>>

    /**
     * Group by Database.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatabaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatabaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatabaseGroupByArgs['orderBy'] }
        : { orderBy?: DatabaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatabaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatabaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Database model
   */
  readonly fields: DatabaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Database.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatabaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    models<T extends Database$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Database$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Database model
   */ 
  interface DatabaseFieldRefs {
    readonly id: FieldRef<"Database", 'Int'>
    readonly name: FieldRef<"Database", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Database findUnique
   */
  export type DatabaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * Filter, which Database to fetch.
     */
    where: DatabaseWhereUniqueInput
  }


  /**
   * Database findUniqueOrThrow
   */
  export type DatabaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * Filter, which Database to fetch.
     */
    where: DatabaseWhereUniqueInput
  }


  /**
   * Database findFirst
   */
  export type DatabaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * Filter, which Database to fetch.
     */
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     */
    orderBy?: DatabaseOrderByWithRelationInput | DatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Databases.
     */
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Databases.
     */
    distinct?: DatabaseScalarFieldEnum | DatabaseScalarFieldEnum[]
  }


  /**
   * Database findFirstOrThrow
   */
  export type DatabaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * Filter, which Database to fetch.
     */
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     */
    orderBy?: DatabaseOrderByWithRelationInput | DatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Databases.
     */
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Databases.
     */
    distinct?: DatabaseScalarFieldEnum | DatabaseScalarFieldEnum[]
  }


  /**
   * Database findMany
   */
  export type DatabaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * Filter, which Databases to fetch.
     */
    where?: DatabaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Databases to fetch.
     */
    orderBy?: DatabaseOrderByWithRelationInput | DatabaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Databases.
     */
    cursor?: DatabaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Databases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Databases.
     */
    skip?: number
    distinct?: DatabaseScalarFieldEnum | DatabaseScalarFieldEnum[]
  }


  /**
   * Database create
   */
  export type DatabaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Database.
     */
    data: XOR<DatabaseCreateInput, DatabaseUncheckedCreateInput>
  }


  /**
   * Database update
   */
  export type DatabaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Database.
     */
    data: XOR<DatabaseUpdateInput, DatabaseUncheckedUpdateInput>
    /**
     * Choose, which Database to update.
     */
    where: DatabaseWhereUniqueInput
  }


  /**
   * Database updateMany
   */
  export type DatabaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Databases.
     */
    data: XOR<DatabaseUpdateManyMutationInput, DatabaseUncheckedUpdateManyInput>
    /**
     * Filter which Databases to update
     */
    where?: DatabaseWhereInput
  }


  /**
   * Database upsert
   */
  export type DatabaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Database to update in case it exists.
     */
    where: DatabaseWhereUniqueInput
    /**
     * In case the Database found by the `where` argument doesn't exist, create a new Database with this data.
     */
    create: XOR<DatabaseCreateInput, DatabaseUncheckedCreateInput>
    /**
     * In case the Database was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatabaseUpdateInput, DatabaseUncheckedUpdateInput>
  }


  /**
   * Database delete
   */
  export type DatabaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
    /**
     * Filter which Database to delete.
     */
    where: DatabaseWhereUniqueInput
  }


  /**
   * Database deleteMany
   */
  export type DatabaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Databases to delete
     */
    where?: DatabaseWhereInput
  }


  /**
   * Database.models
   */
  export type Database$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Database without action
   */
  export type DatabaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Database
     */
    select?: DatabaseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DatabaseInclude<ExtArgs> | null
  }



  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    id: number | null
    databaseId: number | null
  }

  export type ModelSumAggregateOutputType = {
    id: number | null
    databaseId: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    databaseId: number | null
  }

  export type ModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    databaseId: number | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    description: number
    databaseId: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    id?: true
    databaseId?: true
  }

  export type ModelSumAggregateInputType = {
    id?: true
    databaseId?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    databaseId?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    databaseId?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    databaseId?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: number
    name: string
    description: string
    databaseId: number
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    databaseId?: boolean
    attributes?: boolean | Model$attributesArgs<ExtArgs>
    table?: boolean | DatabaseDefaultArgs<ExtArgs>
    relationshipsFrom?: boolean | Model$relationshipsFromArgs<ExtArgs>
    relationshipsTo?: boolean | Model$relationshipsToArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    databaseId?: boolean
  }

  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | Model$attributesArgs<ExtArgs>
    table?: boolean | DatabaseDefaultArgs<ExtArgs>
    relationshipsFrom?: boolean | Model$relationshipsFromArgs<ExtArgs>
    relationshipsTo?: boolean | Model$relationshipsToArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      attributes: Prisma.$AttributePayload<ExtArgs>[]
      table: Prisma.$DatabasePayload<ExtArgs>
      relationshipsFrom: Prisma.$RelationshipPayload<ExtArgs>[]
      relationshipsTo: Prisma.$RelationshipPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      databaseId: number
    }, ExtArgs["result"]["model"]>
    composites: {}
  }


  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Model that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
    **/
    create<T extends ModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelCreateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
    **/
    delete<T extends ModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
    **/
    upsert<T extends ModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attributes<T extends Model$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Model$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findMany'> | Null>;

    table<T extends DatabaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatabaseDefaultArgs<ExtArgs>>): Prisma__DatabaseClient<$Result.GetResult<Prisma.$DatabasePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    relationshipsFrom<T extends Model$relationshipsFromArgs<ExtArgs> = {}>(args?: Subset<T, Model$relationshipsFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    relationshipsTo<T extends Model$relationshipsToArgs<ExtArgs> = {}>(args?: Subset<T, Model$relationshipsToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Model model
   */ 
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'Int'>
    readonly name: FieldRef<"Model", 'String'>
    readonly description: FieldRef<"Model", 'String'>
    readonly databaseId: FieldRef<"Model", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }


  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
  }


  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }


  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
  }


  /**
   * Model.attributes
   */
  export type Model$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    cursor?: AttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Model.relationshipsFrom
   */
  export type Model$relationshipsFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }


  /**
   * Model.relationshipsTo
   */
  export type Model$relationshipsToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    cursor?: RelationshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }


  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
  }



  /**
   * Model Attribute
   */

  export type AggregateAttribute = {
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  export type AttributeAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type AttributeSumAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type AttributeMinAggregateOutputType = {
    id: number | null
    name: string | null
    dataType: string | null
    constraints: string | null
    isPrimaryKey: boolean | null
    foreignKeyTo: string | null
    modelId: number | null
  }

  export type AttributeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    dataType: string | null
    constraints: string | null
    isPrimaryKey: boolean | null
    foreignKeyTo: string | null
    modelId: number | null
  }

  export type AttributeCountAggregateOutputType = {
    id: number
    name: number
    dataType: number
    constraints: number
    isPrimaryKey: number
    foreignKeyTo: number
    modelId: number
    _all: number
  }


  export type AttributeAvgAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type AttributeSumAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type AttributeMinAggregateInputType = {
    id?: true
    name?: true
    dataType?: true
    constraints?: true
    isPrimaryKey?: true
    foreignKeyTo?: true
    modelId?: true
  }

  export type AttributeMaxAggregateInputType = {
    id?: true
    name?: true
    dataType?: true
    constraints?: true
    isPrimaryKey?: true
    foreignKeyTo?: true
    modelId?: true
  }

  export type AttributeCountAggregateInputType = {
    id?: true
    name?: true
    dataType?: true
    constraints?: true
    isPrimaryKey?: true
    foreignKeyTo?: true
    modelId?: true
    _all?: true
  }

  export type AttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attribute to aggregate.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attributes
    **/
    _count?: true | AttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttributeMaxAggregateInputType
  }

  export type GetAttributeAggregateType<T extends AttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttribute[P]>
      : GetScalarType<T[P], AggregateAttribute[P]>
  }




  export type AttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttributeWhereInput
    orderBy?: AttributeOrderByWithAggregationInput | AttributeOrderByWithAggregationInput[]
    by: AttributeScalarFieldEnum[] | AttributeScalarFieldEnum
    having?: AttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttributeCountAggregateInputType | true
    _avg?: AttributeAvgAggregateInputType
    _sum?: AttributeSumAggregateInputType
    _min?: AttributeMinAggregateInputType
    _max?: AttributeMaxAggregateInputType
  }

  export type AttributeGroupByOutputType = {
    id: number
    name: string
    dataType: string
    constraints: string | null
    isPrimaryKey: boolean
    foreignKeyTo: string | null
    modelId: number
    _count: AttributeCountAggregateOutputType | null
    _avg: AttributeAvgAggregateOutputType | null
    _sum: AttributeSumAggregateOutputType | null
    _min: AttributeMinAggregateOutputType | null
    _max: AttributeMaxAggregateOutputType | null
  }

  type GetAttributeGroupByPayload<T extends AttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttributeGroupByOutputType[P]>
            : GetScalarType<T[P], AttributeGroupByOutputType[P]>
        }
      >
    >


  export type AttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataType?: boolean
    constraints?: boolean
    isPrimaryKey?: boolean
    foreignKeyTo?: boolean
    modelId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attribute"]>

  export type AttributeSelectScalar = {
    id?: boolean
    name?: boolean
    dataType?: boolean
    constraints?: boolean
    isPrimaryKey?: boolean
    foreignKeyTo?: boolean
    modelId?: boolean
  }

  export type AttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }


  export type $AttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attribute"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      dataType: string
      constraints: string | null
      isPrimaryKey: boolean
      foreignKeyTo: string | null
      modelId: number
    }, ExtArgs["result"]["attribute"]>
    composites: {}
  }


  type AttributeGetPayload<S extends boolean | null | undefined | AttributeDefaultArgs> = $Result.GetResult<Prisma.$AttributePayload, S>

  type AttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AttributeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AttributeCountAggregateInputType | true
    }

  export interface AttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attribute'], meta: { name: 'Attribute' } }
    /**
     * Find zero or one Attribute that matches the filter.
     * @param {AttributeFindUniqueArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AttributeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeFindUniqueArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Attribute that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AttributeFindUniqueOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AttributeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Attribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AttributeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindFirstArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Attribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindFirstOrThrowArgs} args - Arguments to find a Attribute
     * @example
     * // Get one Attribute
     * const attribute = await prisma.attribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AttributeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Attributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attributes
     * const attributes = await prisma.attribute.findMany()
     * 
     * // Get first 10 Attributes
     * const attributes = await prisma.attribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attributeWithIdOnly = await prisma.attribute.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AttributeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Attribute.
     * @param {AttributeCreateArgs} args - Arguments to create a Attribute.
     * @example
     * // Create one Attribute
     * const Attribute = await prisma.attribute.create({
     *   data: {
     *     // ... data to create a Attribute
     *   }
     * })
     * 
    **/
    create<T extends AttributeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeCreateArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Attribute.
     * @param {AttributeDeleteArgs} args - Arguments to delete one Attribute.
     * @example
     * // Delete one Attribute
     * const Attribute = await prisma.attribute.delete({
     *   where: {
     *     // ... filter to delete one Attribute
     *   }
     * })
     * 
    **/
    delete<T extends AttributeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeDeleteArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Attribute.
     * @param {AttributeUpdateArgs} args - Arguments to update one Attribute.
     * @example
     * // Update one Attribute
     * const attribute = await prisma.attribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AttributeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeUpdateArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Attributes.
     * @param {AttributeDeleteManyArgs} args - Arguments to filter Attributes to delete.
     * @example
     * // Delete a few Attributes
     * const { count } = await prisma.attribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AttributeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AttributeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attributes
     * const attribute = await prisma.attribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AttributeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attribute.
     * @param {AttributeUpsertArgs} args - Arguments to update or create a Attribute.
     * @example
     * // Update or create a Attribute
     * const attribute = await prisma.attribute.upsert({
     *   create: {
     *     // ... data to create a Attribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attribute we want to update
     *   }
     * })
    **/
    upsert<T extends AttributeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AttributeUpsertArgs<ExtArgs>>
    ): Prisma__AttributeClient<$Result.GetResult<Prisma.$AttributePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Attributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeCountArgs} args - Arguments to filter Attributes to count.
     * @example
     * // Count the number of Attributes
     * const count = await prisma.attribute.count({
     *   where: {
     *     // ... the filter for the Attributes we want to count
     *   }
     * })
    **/
    count<T extends AttributeCountArgs>(
      args?: Subset<T, AttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttributeAggregateArgs>(args: Subset<T, AttributeAggregateArgs>): Prisma.PrismaPromise<GetAttributeAggregateType<T>>

    /**
     * Group by Attribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttributeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttributeGroupByArgs['orderBy'] }
        : { orderBy?: AttributeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attribute model
   */
  readonly fields: AttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Attribute model
   */ 
  interface AttributeFieldRefs {
    readonly id: FieldRef<"Attribute", 'Int'>
    readonly name: FieldRef<"Attribute", 'String'>
    readonly dataType: FieldRef<"Attribute", 'String'>
    readonly constraints: FieldRef<"Attribute", 'String'>
    readonly isPrimaryKey: FieldRef<"Attribute", 'Boolean'>
    readonly foreignKeyTo: FieldRef<"Attribute", 'String'>
    readonly modelId: FieldRef<"Attribute", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Attribute findUnique
   */
  export type AttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute findUniqueOrThrow
   */
  export type AttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute findFirst
   */
  export type AttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Attribute findFirstOrThrow
   */
  export type AttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attribute to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attributes.
     */
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Attribute findMany
   */
  export type AttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter, which Attributes to fetch.
     */
    where?: AttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attributes to fetch.
     */
    orderBy?: AttributeOrderByWithRelationInput | AttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attributes.
     */
    cursor?: AttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attributes.
     */
    skip?: number
    distinct?: AttributeScalarFieldEnum | AttributeScalarFieldEnum[]
  }


  /**
   * Attribute create
   */
  export type AttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a Attribute.
     */
    data: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
  }


  /**
   * Attribute update
   */
  export type AttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a Attribute.
     */
    data: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
    /**
     * Choose, which Attribute to update.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute updateMany
   */
  export type AttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attributes.
     */
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyInput>
    /**
     * Filter which Attributes to update
     */
    where?: AttributeWhereInput
  }


  /**
   * Attribute upsert
   */
  export type AttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the Attribute to update in case it exists.
     */
    where: AttributeWhereUniqueInput
    /**
     * In case the Attribute found by the `where` argument doesn't exist, create a new Attribute with this data.
     */
    create: XOR<AttributeCreateInput, AttributeUncheckedCreateInput>
    /**
     * In case the Attribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttributeUpdateInput, AttributeUncheckedUpdateInput>
  }


  /**
   * Attribute delete
   */
  export type AttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
    /**
     * Filter which Attribute to delete.
     */
    where: AttributeWhereUniqueInput
  }


  /**
   * Attribute deleteMany
   */
  export type AttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attributes to delete
     */
    where?: AttributeWhereInput
  }


  /**
   * Attribute without action
   */
  export type AttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attribute
     */
    select?: AttributeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AttributeInclude<ExtArgs> | null
  }



  /**
   * Model Relationship
   */

  export type AggregateRelationship = {
    _count: RelationshipCountAggregateOutputType | null
    _avg: RelationshipAvgAggregateOutputType | null
    _sum: RelationshipSumAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  export type RelationshipAvgAggregateOutputType = {
    id: number | null
    modelIdFrom: number | null
    modelIdTo: number | null
  }

  export type RelationshipSumAggregateOutputType = {
    id: number | null
    modelIdFrom: number | null
    modelIdTo: number | null
  }

  export type RelationshipMinAggregateOutputType = {
    id: number | null
    modelIdFrom: number | null
    modelIdTo: number | null
    type: string | null
    onDelete: string | null
    onUpdate: string | null
  }

  export type RelationshipMaxAggregateOutputType = {
    id: number | null
    modelIdFrom: number | null
    modelIdTo: number | null
    type: string | null
    onDelete: string | null
    onUpdate: string | null
  }

  export type RelationshipCountAggregateOutputType = {
    id: number
    modelIdFrom: number
    modelIdTo: number
    type: number
    onDelete: number
    onUpdate: number
    _all: number
  }


  export type RelationshipAvgAggregateInputType = {
    id?: true
    modelIdFrom?: true
    modelIdTo?: true
  }

  export type RelationshipSumAggregateInputType = {
    id?: true
    modelIdFrom?: true
    modelIdTo?: true
  }

  export type RelationshipMinAggregateInputType = {
    id?: true
    modelIdFrom?: true
    modelIdTo?: true
    type?: true
    onDelete?: true
    onUpdate?: true
  }

  export type RelationshipMaxAggregateInputType = {
    id?: true
    modelIdFrom?: true
    modelIdTo?: true
    type?: true
    onDelete?: true
    onUpdate?: true
  }

  export type RelationshipCountAggregateInputType = {
    id?: true
    modelIdFrom?: true
    modelIdTo?: true
    type?: true
    onDelete?: true
    onUpdate?: true
    _all?: true
  }

  export type RelationshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationship to aggregate.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relationships
    **/
    _count?: true | RelationshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelationshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelationshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationshipMaxAggregateInputType
  }

  export type GetRelationshipAggregateType<T extends RelationshipAggregateArgs> = {
        [P in keyof T & keyof AggregateRelationship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelationship[P]>
      : GetScalarType<T[P], AggregateRelationship[P]>
  }




  export type RelationshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationshipWhereInput
    orderBy?: RelationshipOrderByWithAggregationInput | RelationshipOrderByWithAggregationInput[]
    by: RelationshipScalarFieldEnum[] | RelationshipScalarFieldEnum
    having?: RelationshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationshipCountAggregateInputType | true
    _avg?: RelationshipAvgAggregateInputType
    _sum?: RelationshipSumAggregateInputType
    _min?: RelationshipMinAggregateInputType
    _max?: RelationshipMaxAggregateInputType
  }

  export type RelationshipGroupByOutputType = {
    id: number
    modelIdFrom: number
    modelIdTo: number
    type: string
    onDelete: string | null
    onUpdate: string | null
    _count: RelationshipCountAggregateOutputType | null
    _avg: RelationshipAvgAggregateOutputType | null
    _sum: RelationshipSumAggregateOutputType | null
    _min: RelationshipMinAggregateOutputType | null
    _max: RelationshipMaxAggregateOutputType | null
  }

  type GetRelationshipGroupByPayload<T extends RelationshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
            : GetScalarType<T[P], RelationshipGroupByOutputType[P]>
        }
      >
    >


  export type RelationshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelIdFrom?: boolean
    modelIdTo?: boolean
    type?: boolean
    onDelete?: boolean
    onUpdate?: boolean
    modelFrom?: boolean | ModelDefaultArgs<ExtArgs>
    modelTo?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relationship"]>

  export type RelationshipSelectScalar = {
    id?: boolean
    modelIdFrom?: boolean
    modelIdTo?: boolean
    type?: boolean
    onDelete?: boolean
    onUpdate?: boolean
  }

  export type RelationshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelFrom?: boolean | ModelDefaultArgs<ExtArgs>
    modelTo?: boolean | ModelDefaultArgs<ExtArgs>
  }


  export type $RelationshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relationship"
    objects: {
      modelFrom: Prisma.$ModelPayload<ExtArgs>
      modelTo: Prisma.$ModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelIdFrom: number
      modelIdTo: number
      type: string
      onDelete: string | null
      onUpdate: string | null
    }, ExtArgs["result"]["relationship"]>
    composites: {}
  }


  type RelationshipGetPayload<S extends boolean | null | undefined | RelationshipDefaultArgs> = $Result.GetResult<Prisma.$RelationshipPayload, S>

  type RelationshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RelationshipFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RelationshipCountAggregateInputType | true
    }

  export interface RelationshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relationship'], meta: { name: 'Relationship' } }
    /**
     * Find zero or one Relationship that matches the filter.
     * @param {RelationshipFindUniqueArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RelationshipFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RelationshipFindUniqueArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Relationship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RelationshipFindUniqueOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RelationshipFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RelationshipFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Relationship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RelationshipFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RelationshipFindFirstArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Relationship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindFirstOrThrowArgs} args - Arguments to find a Relationship
     * @example
     * // Get one Relationship
     * const relationship = await prisma.relationship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RelationshipFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RelationshipFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Relationships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relationships
     * const relationships = await prisma.relationship.findMany()
     * 
     * // Get first 10 Relationships
     * const relationships = await prisma.relationship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationshipWithIdOnly = await prisma.relationship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RelationshipFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RelationshipFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Relationship.
     * @param {RelationshipCreateArgs} args - Arguments to create a Relationship.
     * @example
     * // Create one Relationship
     * const Relationship = await prisma.relationship.create({
     *   data: {
     *     // ... data to create a Relationship
     *   }
     * })
     * 
    **/
    create<T extends RelationshipCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RelationshipCreateArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Relationship.
     * @param {RelationshipDeleteArgs} args - Arguments to delete one Relationship.
     * @example
     * // Delete one Relationship
     * const Relationship = await prisma.relationship.delete({
     *   where: {
     *     // ... filter to delete one Relationship
     *   }
     * })
     * 
    **/
    delete<T extends RelationshipDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RelationshipDeleteArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Relationship.
     * @param {RelationshipUpdateArgs} args - Arguments to update one Relationship.
     * @example
     * // Update one Relationship
     * const relationship = await prisma.relationship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RelationshipUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RelationshipUpdateArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Relationships.
     * @param {RelationshipDeleteManyArgs} args - Arguments to filter Relationships to delete.
     * @example
     * // Delete a few Relationships
     * const { count } = await prisma.relationship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RelationshipDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RelationshipDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relationships
     * const relationship = await prisma.relationship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RelationshipUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RelationshipUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Relationship.
     * @param {RelationshipUpsertArgs} args - Arguments to update or create a Relationship.
     * @example
     * // Update or create a Relationship
     * const relationship = await prisma.relationship.upsert({
     *   create: {
     *     // ... data to create a Relationship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relationship we want to update
     *   }
     * })
    **/
    upsert<T extends RelationshipUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RelationshipUpsertArgs<ExtArgs>>
    ): Prisma__RelationshipClient<$Result.GetResult<Prisma.$RelationshipPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Relationships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipCountArgs} args - Arguments to filter Relationships to count.
     * @example
     * // Count the number of Relationships
     * const count = await prisma.relationship.count({
     *   where: {
     *     // ... the filter for the Relationships we want to count
     *   }
     * })
    **/
    count<T extends RelationshipCountArgs>(
      args?: Subset<T, RelationshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelationshipAggregateArgs>(args: Subset<T, RelationshipAggregateArgs>): Prisma.PrismaPromise<GetRelationshipAggregateType<T>>

    /**
     * Group by Relationship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelationshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationshipGroupByArgs['orderBy'] }
        : { orderBy?: RelationshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelationshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relationship model
   */
  readonly fields: RelationshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relationship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    modelFrom<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    modelTo<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Relationship model
   */ 
  interface RelationshipFieldRefs {
    readonly id: FieldRef<"Relationship", 'Int'>
    readonly modelIdFrom: FieldRef<"Relationship", 'Int'>
    readonly modelIdTo: FieldRef<"Relationship", 'Int'>
    readonly type: FieldRef<"Relationship", 'String'>
    readonly onDelete: FieldRef<"Relationship", 'String'>
    readonly onUpdate: FieldRef<"Relationship", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Relationship findUnique
   */
  export type RelationshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }


  /**
   * Relationship findUniqueOrThrow
   */
  export type RelationshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where: RelationshipWhereUniqueInput
  }


  /**
   * Relationship findFirst
   */
  export type RelationshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }


  /**
   * Relationship findFirstOrThrow
   */
  export type RelationshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationship to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relationships.
     */
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }


  /**
   * Relationship findMany
   */
  export type RelationshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter, which Relationships to fetch.
     */
    where?: RelationshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relationships to fetch.
     */
    orderBy?: RelationshipOrderByWithRelationInput | RelationshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relationships.
     */
    cursor?: RelationshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relationships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relationships.
     */
    skip?: number
    distinct?: RelationshipScalarFieldEnum | RelationshipScalarFieldEnum[]
  }


  /**
   * Relationship create
   */
  export type RelationshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Relationship.
     */
    data: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
  }


  /**
   * Relationship update
   */
  export type RelationshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Relationship.
     */
    data: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
    /**
     * Choose, which Relationship to update.
     */
    where: RelationshipWhereUniqueInput
  }


  /**
   * Relationship updateMany
   */
  export type RelationshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relationships.
     */
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyInput>
    /**
     * Filter which Relationships to update
     */
    where?: RelationshipWhereInput
  }


  /**
   * Relationship upsert
   */
  export type RelationshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Relationship to update in case it exists.
     */
    where: RelationshipWhereUniqueInput
    /**
     * In case the Relationship found by the `where` argument doesn't exist, create a new Relationship with this data.
     */
    create: XOR<RelationshipCreateInput, RelationshipUncheckedCreateInput>
    /**
     * In case the Relationship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationshipUpdateInput, RelationshipUncheckedUpdateInput>
  }


  /**
   * Relationship delete
   */
  export type RelationshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
    /**
     * Filter which Relationship to delete.
     */
    where: RelationshipWhereUniqueInput
  }


  /**
   * Relationship deleteMany
   */
  export type RelationshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relationships to delete
     */
    where?: RelationshipWhereInput
  }


  /**
   * Relationship without action
   */
  export type RelationshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relationship
     */
    select?: RelationshipSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RelationshipInclude<ExtArgs> | null
  }



  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileType: string | null
    filePath: string | null
    hash: string | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    fileType: string | null
    filePath: string | null
    hash: string | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    fileName: number
    fileType: number
    filePath: number
    hash: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    filePath?: true
    hash?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    filePath?: true
    hash?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    fileName?: true
    fileType?: true
    filePath?: true
    hash?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    fileName: string
    fileType: string
    filePath: string
    hash: string
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    filePath?: boolean
    hash?: boolean
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    fileName?: boolean
    fileType?: boolean
    filePath?: boolean
    hash?: boolean
  }


  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      fileType: string
      filePath: string
      hash: string
    }, ExtArgs["result"]["file"]>
    composites: {}
  }


  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one File that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FileCreateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
    ): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the File model
   */ 
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly fileName: FieldRef<"File", 'String'>
    readonly fileType: FieldRef<"File", 'String'>
    readonly filePath: FieldRef<"File", 'String'>
    readonly hash: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }


  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
  }



  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    id: number | null
  }

  export type TestSumAggregateOutputType = {
    id: number | null
  }

  export type TestMinAggregateOutputType = {
    id: number | null
    testName: string | null
    description: string | null
    testType: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: number | null
    testName: string | null
    description: string | null
    testType: string | null
    filePath: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    testName: number
    description: number
    testType: number
    filePath: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    id?: true
  }

  export type TestSumAggregateInputType = {
    id?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    testName?: true
    description?: true
    testType?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    testName?: true
    description?: true
    testType?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    testName?: true
    description?: true
    testType?: true
    filePath?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: number
    testName: string
    description: string
    testType: string
    filePath: string
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testName?: boolean
    description?: boolean
    testType?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    executions?: boolean | Test$executionsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    testName?: boolean
    description?: boolean
    testType?: boolean
    filePath?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    executions?: boolean | Test$executionsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      executions: Prisma.$ExecutionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      testName: string
      description: string
      testType: string
      filePath: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }


  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends TestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TestCreateArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends TestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TestDeleteArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends TestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TestUpsertArgs<ExtArgs>>
    ): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    executions<T extends Test$executionsArgs<ExtArgs> = {}>(args?: Subset<T, Test$executionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Test model
   */ 
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'Int'>
    readonly testName: FieldRef<"Test", 'String'>
    readonly description: FieldRef<"Test", 'String'>
    readonly testType: FieldRef<"Test", 'String'>
    readonly filePath: FieldRef<"Test", 'String'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }


  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }


  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
  }


  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }


  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }


  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
  }


  /**
   * Test.executions
   */
  export type Test$executionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    where?: ExecutionWhereInput
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    cursor?: ExecutionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }


  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TestInclude<ExtArgs> | null
  }



  /**
   * Model Execution
   */

  export type AggregateExecution = {
    _count: ExecutionCountAggregateOutputType | null
    _avg: ExecutionAvgAggregateOutputType | null
    _sum: ExecutionSumAggregateOutputType | null
    _min: ExecutionMinAggregateOutputType | null
    _max: ExecutionMaxAggregateOutputType | null
  }

  export type ExecutionAvgAggregateOutputType = {
    id: number | null
    testId: number | null
  }

  export type ExecutionSumAggregateOutputType = {
    id: number | null
    testId: number | null
  }

  export type ExecutionMinAggregateOutputType = {
    id: number | null
    testId: number | null
    status: string | null
    output: string | null
    createdAt: Date | null
  }

  export type ExecutionMaxAggregateOutputType = {
    id: number | null
    testId: number | null
    status: string | null
    output: string | null
    createdAt: Date | null
  }

  export type ExecutionCountAggregateOutputType = {
    id: number
    testId: number
    status: number
    output: number
    createdAt: number
    _all: number
  }


  export type ExecutionAvgAggregateInputType = {
    id?: true
    testId?: true
  }

  export type ExecutionSumAggregateInputType = {
    id?: true
    testId?: true
  }

  export type ExecutionMinAggregateInputType = {
    id?: true
    testId?: true
    status?: true
    output?: true
    createdAt?: true
  }

  export type ExecutionMaxAggregateInputType = {
    id?: true
    testId?: true
    status?: true
    output?: true
    createdAt?: true
  }

  export type ExecutionCountAggregateInputType = {
    id?: true
    testId?: true
    status?: true
    output?: true
    createdAt?: true
    _all?: true
  }

  export type ExecutionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Execution to aggregate.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Executions
    **/
    _count?: true | ExecutionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionMaxAggregateInputType
  }

  export type GetExecutionAggregateType<T extends ExecutionAggregateArgs> = {
        [P in keyof T & keyof AggregateExecution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecution[P]>
      : GetScalarType<T[P], AggregateExecution[P]>
  }




  export type ExecutionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionWhereInput
    orderBy?: ExecutionOrderByWithAggregationInput | ExecutionOrderByWithAggregationInput[]
    by: ExecutionScalarFieldEnum[] | ExecutionScalarFieldEnum
    having?: ExecutionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionCountAggregateInputType | true
    _avg?: ExecutionAvgAggregateInputType
    _sum?: ExecutionSumAggregateInputType
    _min?: ExecutionMinAggregateInputType
    _max?: ExecutionMaxAggregateInputType
  }

  export type ExecutionGroupByOutputType = {
    id: number
    testId: number
    status: string
    output: string | null
    createdAt: Date
    _count: ExecutionCountAggregateOutputType | null
    _avg: ExecutionAvgAggregateOutputType | null
    _sum: ExecutionSumAggregateOutputType | null
    _min: ExecutionMinAggregateOutputType | null
    _max: ExecutionMaxAggregateOutputType | null
  }

  type GetExecutionGroupByPayload<T extends ExecutionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    testId?: boolean
    status?: boolean
    output?: boolean
    createdAt?: boolean
    test?: boolean | TestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["execution"]>

  export type ExecutionSelectScalar = {
    id?: boolean
    testId?: boolean
    status?: boolean
    output?: boolean
    createdAt?: boolean
  }

  export type ExecutionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | TestDefaultArgs<ExtArgs>
  }


  export type $ExecutionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Execution"
    objects: {
      test: Prisma.$TestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      testId: number
      status: string
      output: string | null
      createdAt: Date
    }, ExtArgs["result"]["execution"]>
    composites: {}
  }


  type ExecutionGetPayload<S extends boolean | null | undefined | ExecutionDefaultArgs> = $Result.GetResult<Prisma.$ExecutionPayload, S>

  type ExecutionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExecutionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExecutionCountAggregateInputType | true
    }

  export interface ExecutionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Execution'], meta: { name: 'Execution' } }
    /**
     * Find zero or one Execution that matches the filter.
     * @param {ExecutionFindUniqueArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExecutionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExecutionFindUniqueArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Execution that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExecutionFindUniqueOrThrowArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExecutionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExecutionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Execution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindFirstArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExecutionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExecutionFindFirstArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Execution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindFirstOrThrowArgs} args - Arguments to find a Execution
     * @example
     * // Get one Execution
     * const execution = await prisma.execution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExecutionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExecutionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Executions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Executions
     * const executions = await prisma.execution.findMany()
     * 
     * // Get first 10 Executions
     * const executions = await prisma.execution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionWithIdOnly = await prisma.execution.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExecutionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExecutionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Execution.
     * @param {ExecutionCreateArgs} args - Arguments to create a Execution.
     * @example
     * // Create one Execution
     * const Execution = await prisma.execution.create({
     *   data: {
     *     // ... data to create a Execution
     *   }
     * })
     * 
    **/
    create<T extends ExecutionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExecutionCreateArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Execution.
     * @param {ExecutionDeleteArgs} args - Arguments to delete one Execution.
     * @example
     * // Delete one Execution
     * const Execution = await prisma.execution.delete({
     *   where: {
     *     // ... filter to delete one Execution
     *   }
     * })
     * 
    **/
    delete<T extends ExecutionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExecutionDeleteArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Execution.
     * @param {ExecutionUpdateArgs} args - Arguments to update one Execution.
     * @example
     * // Update one Execution
     * const execution = await prisma.execution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExecutionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExecutionUpdateArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Executions.
     * @param {ExecutionDeleteManyArgs} args - Arguments to filter Executions to delete.
     * @example
     * // Delete a few Executions
     * const { count } = await prisma.execution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExecutionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExecutionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Executions
     * const execution = await prisma.execution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExecutionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExecutionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Execution.
     * @param {ExecutionUpsertArgs} args - Arguments to update or create a Execution.
     * @example
     * // Update or create a Execution
     * const execution = await prisma.execution.upsert({
     *   create: {
     *     // ... data to create a Execution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Execution we want to update
     *   }
     * })
    **/
    upsert<T extends ExecutionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExecutionUpsertArgs<ExtArgs>>
    ): Prisma__ExecutionClient<$Result.GetResult<Prisma.$ExecutionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Executions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionCountArgs} args - Arguments to filter Executions to count.
     * @example
     * // Count the number of Executions
     * const count = await prisma.execution.count({
     *   where: {
     *     // ... the filter for the Executions we want to count
     *   }
     * })
    **/
    count<T extends ExecutionCountArgs>(
      args?: Subset<T, ExecutionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExecutionAggregateArgs>(args: Subset<T, ExecutionAggregateArgs>): Prisma.PrismaPromise<GetExecutionAggregateType<T>>

    /**
     * Group by Execution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExecutionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExecutionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Execution model
   */
  readonly fields: ExecutionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Execution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    test<T extends TestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TestDefaultArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Execution model
   */ 
  interface ExecutionFieldRefs {
    readonly id: FieldRef<"Execution", 'Int'>
    readonly testId: FieldRef<"Execution", 'Int'>
    readonly status: FieldRef<"Execution", 'String'>
    readonly output: FieldRef<"Execution", 'String'>
    readonly createdAt: FieldRef<"Execution", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Execution findUnique
   */
  export type ExecutionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where: ExecutionWhereUniqueInput
  }


  /**
   * Execution findUniqueOrThrow
   */
  export type ExecutionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where: ExecutionWhereUniqueInput
  }


  /**
   * Execution findFirst
   */
  export type ExecutionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }


  /**
   * Execution findFirstOrThrow
   */
  export type ExecutionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Execution to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Executions.
     */
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }


  /**
   * Execution findMany
   */
  export type ExecutionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter, which Executions to fetch.
     */
    where?: ExecutionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Executions to fetch.
     */
    orderBy?: ExecutionOrderByWithRelationInput | ExecutionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Executions.
     */
    cursor?: ExecutionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Executions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Executions.
     */
    skip?: number
    distinct?: ExecutionScalarFieldEnum | ExecutionScalarFieldEnum[]
  }


  /**
   * Execution create
   */
  export type ExecutionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The data needed to create a Execution.
     */
    data: XOR<ExecutionCreateInput, ExecutionUncheckedCreateInput>
  }


  /**
   * Execution update
   */
  export type ExecutionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The data needed to update a Execution.
     */
    data: XOR<ExecutionUpdateInput, ExecutionUncheckedUpdateInput>
    /**
     * Choose, which Execution to update.
     */
    where: ExecutionWhereUniqueInput
  }


  /**
   * Execution updateMany
   */
  export type ExecutionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Executions.
     */
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyInput>
    /**
     * Filter which Executions to update
     */
    where?: ExecutionWhereInput
  }


  /**
   * Execution upsert
   */
  export type ExecutionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * The filter to search for the Execution to update in case it exists.
     */
    where: ExecutionWhereUniqueInput
    /**
     * In case the Execution found by the `where` argument doesn't exist, create a new Execution with this data.
     */
    create: XOR<ExecutionCreateInput, ExecutionUncheckedCreateInput>
    /**
     * In case the Execution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionUpdateInput, ExecutionUncheckedUpdateInput>
  }


  /**
   * Execution delete
   */
  export type ExecutionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
    /**
     * Filter which Execution to delete.
     */
    where: ExecutionWhereUniqueInput
  }


  /**
   * Execution deleteMany
   */
  export type ExecutionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Executions to delete
     */
    where?: ExecutionWhereInput
  }


  /**
   * Execution without action
   */
  export type ExecutionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Execution
     */
    select?: ExecutionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExecutionInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DharmabeingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    attributes: 'attributes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    permissions: 'permissions'
  };

  export type DharmabeingScalarFieldEnum = (typeof DharmabeingScalarFieldEnum)[keyof typeof DharmabeingScalarFieldEnum]


  export const DaoScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    energy: 'energy',
    treasury: 'treasury',
    accounts: 'accounts',
    canvas: 'canvas',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    parentId: 'parentId'
  };

  export type DaoScalarFieldEnum = (typeof DaoScalarFieldEnum)[keyof typeof DaoScalarFieldEnum]


  export const PortalScalarFieldEnum: {
    id: 'id',
    daoId: 'daoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PortalScalarFieldEnum = (typeof PortalScalarFieldEnum)[keyof typeof PortalScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashedPassword: 'hashedPassword'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const DharmaActionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DharmaActionScalarFieldEnum = (typeof DharmaActionScalarFieldEnum)[keyof typeof DharmaActionScalarFieldEnum]


  export const ConversationScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId',
    dharmabeingId: 'dharmabeingId'
  };

  export type ConversationScalarFieldEnum = (typeof ConversationScalarFieldEnum)[keyof typeof ConversationScalarFieldEnum]


  export const UserMemoryScalarFieldEnum: {
    id: 'id',
    content: 'content',
    userId: 'userId'
  };

  export type UserMemoryScalarFieldEnum = (typeof UserMemoryScalarFieldEnum)[keyof typeof UserMemoryScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    hashedSessionToken: 'hashedSessionToken',
    antiCSRFToken: 'antiCSRFToken',
    publicData: 'publicData',
    privateData: 'privateData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const DatabaseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DatabaseScalarFieldEnum = (typeof DatabaseScalarFieldEnum)[keyof typeof DatabaseScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    databaseId: 'databaseId'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const AttributeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dataType: 'dataType',
    constraints: 'constraints',
    isPrimaryKey: 'isPrimaryKey',
    foreignKeyTo: 'foreignKeyTo',
    modelId: 'modelId'
  };

  export type AttributeScalarFieldEnum = (typeof AttributeScalarFieldEnum)[keyof typeof AttributeScalarFieldEnum]


  export const RelationshipScalarFieldEnum: {
    id: 'id',
    modelIdFrom: 'modelIdFrom',
    modelIdTo: 'modelIdTo',
    type: 'type',
    onDelete: 'onDelete',
    onUpdate: 'onUpdate'
  };

  export type RelationshipScalarFieldEnum = (typeof RelationshipScalarFieldEnum)[keyof typeof RelationshipScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    fileType: 'fileType',
    filePath: 'filePath',
    hash: 'hash'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    testName: 'testName',
    description: 'description',
    testType: 'testType',
    filePath: 'filePath',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const ExecutionScalarFieldEnum: {
    id: 'id',
    testId: 'testId',
    status: 'status',
    output: 'output',
    createdAt: 'createdAt'
  };

  export type ExecutionScalarFieldEnum = (typeof ExecutionScalarFieldEnum)[keyof typeof ExecutionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DharmabeingWhereInput = {
    AND?: DharmabeingWhereInput | DharmabeingWhereInput[]
    OR?: DharmabeingWhereInput[]
    NOT?: DharmabeingWhereInput | DharmabeingWhereInput[]
    id?: IntFilter<"Dharmabeing"> | number
    name?: StringFilter<"Dharmabeing"> | string
    type?: StringFilter<"Dharmabeing"> | string
    attributes?: StringNullableFilter<"Dharmabeing"> | string | null
    createdAt?: DateTimeFilter<"Dharmabeing"> | Date | string
    updatedAt?: DateTimeFilter<"Dharmabeing"> | Date | string
    permissions?: StringFilter<"Dharmabeing"> | string
    conversations?: ConversationListRelationFilter
  }

  export type DharmabeingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type DharmabeingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DharmabeingWhereInput | DharmabeingWhereInput[]
    OR?: DharmabeingWhereInput[]
    NOT?: DharmabeingWhereInput | DharmabeingWhereInput[]
    name?: StringFilter<"Dharmabeing"> | string
    type?: StringFilter<"Dharmabeing"> | string
    attributes?: StringNullableFilter<"Dharmabeing"> | string | null
    createdAt?: DateTimeFilter<"Dharmabeing"> | Date | string
    updatedAt?: DateTimeFilter<"Dharmabeing"> | Date | string
    permissions?: StringFilter<"Dharmabeing"> | string
    conversations?: ConversationListRelationFilter
  }, "id">

  export type DharmabeingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
    _count?: DharmabeingCountOrderByAggregateInput
    _avg?: DharmabeingAvgOrderByAggregateInput
    _max?: DharmabeingMaxOrderByAggregateInput
    _min?: DharmabeingMinOrderByAggregateInput
    _sum?: DharmabeingSumOrderByAggregateInput
  }

  export type DharmabeingScalarWhereWithAggregatesInput = {
    AND?: DharmabeingScalarWhereWithAggregatesInput | DharmabeingScalarWhereWithAggregatesInput[]
    OR?: DharmabeingScalarWhereWithAggregatesInput[]
    NOT?: DharmabeingScalarWhereWithAggregatesInput | DharmabeingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dharmabeing"> | number
    name?: StringWithAggregatesFilter<"Dharmabeing"> | string
    type?: StringWithAggregatesFilter<"Dharmabeing"> | string
    attributes?: StringNullableWithAggregatesFilter<"Dharmabeing"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dharmabeing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dharmabeing"> | Date | string
    permissions?: StringWithAggregatesFilter<"Dharmabeing"> | string
  }

  export type DaoWhereInput = {
    AND?: DaoWhereInput | DaoWhereInput[]
    OR?: DaoWhereInput[]
    NOT?: DaoWhereInput | DaoWhereInput[]
    id?: IntFilter<"Dao"> | number
    name?: StringFilter<"Dao"> | string
    description?: StringNullableFilter<"Dao"> | string | null
    energy?: IntFilter<"Dao"> | number
    treasury?: IntFilter<"Dao"> | number
    accounts?: StringNullableFilter<"Dao"> | string | null
    canvas?: StringNullableFilter<"Dao"> | string | null
    createdAt?: DateTimeFilter<"Dao"> | Date | string
    updatedAt?: DateTimeFilter<"Dao"> | Date | string
    parentId?: IntNullableFilter<"Dao"> | number | null
    parent?: XOR<DaoNullableRelationFilter, DaoWhereInput> | null
    children?: DaoListRelationFilter
    portals?: PortalListRelationFilter
  }

  export type DaoOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    accounts?: SortOrderInput | SortOrder
    canvas?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: DaoOrderByWithRelationInput
    children?: DaoOrderByRelationAggregateInput
    portals?: PortalOrderByRelationAggregateInput
  }

  export type DaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DaoWhereInput | DaoWhereInput[]
    OR?: DaoWhereInput[]
    NOT?: DaoWhereInput | DaoWhereInput[]
    name?: StringFilter<"Dao"> | string
    description?: StringNullableFilter<"Dao"> | string | null
    energy?: IntFilter<"Dao"> | number
    treasury?: IntFilter<"Dao"> | number
    accounts?: StringNullableFilter<"Dao"> | string | null
    canvas?: StringNullableFilter<"Dao"> | string | null
    createdAt?: DateTimeFilter<"Dao"> | Date | string
    updatedAt?: DateTimeFilter<"Dao"> | Date | string
    parentId?: IntNullableFilter<"Dao"> | number | null
    parent?: XOR<DaoNullableRelationFilter, DaoWhereInput> | null
    children?: DaoListRelationFilter
    portals?: PortalListRelationFilter
  }, "id">

  export type DaoOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    accounts?: SortOrderInput | SortOrder
    canvas?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: DaoCountOrderByAggregateInput
    _avg?: DaoAvgOrderByAggregateInput
    _max?: DaoMaxOrderByAggregateInput
    _min?: DaoMinOrderByAggregateInput
    _sum?: DaoSumOrderByAggregateInput
  }

  export type DaoScalarWhereWithAggregatesInput = {
    AND?: DaoScalarWhereWithAggregatesInput | DaoScalarWhereWithAggregatesInput[]
    OR?: DaoScalarWhereWithAggregatesInput[]
    NOT?: DaoScalarWhereWithAggregatesInput | DaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dao"> | number
    name?: StringWithAggregatesFilter<"Dao"> | string
    description?: StringNullableWithAggregatesFilter<"Dao"> | string | null
    energy?: IntWithAggregatesFilter<"Dao"> | number
    treasury?: IntWithAggregatesFilter<"Dao"> | number
    accounts?: StringNullableWithAggregatesFilter<"Dao"> | string | null
    canvas?: StringNullableWithAggregatesFilter<"Dao"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dao"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dao"> | Date | string
    parentId?: IntNullableWithAggregatesFilter<"Dao"> | number | null
  }

  export type PortalWhereInput = {
    AND?: PortalWhereInput | PortalWhereInput[]
    OR?: PortalWhereInput[]
    NOT?: PortalWhereInput | PortalWhereInput[]
    id?: IntFilter<"Portal"> | number
    daoId?: IntFilter<"Portal"> | number
    createdAt?: DateTimeFilter<"Portal"> | Date | string
    updatedAt?: DateTimeFilter<"Portal"> | Date | string
    dao?: XOR<DaoRelationFilter, DaoWhereInput>
  }

  export type PortalOrderByWithRelationInput = {
    id?: SortOrder
    daoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dao?: DaoOrderByWithRelationInput
  }

  export type PortalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortalWhereInput | PortalWhereInput[]
    OR?: PortalWhereInput[]
    NOT?: PortalWhereInput | PortalWhereInput[]
    daoId?: IntFilter<"Portal"> | number
    createdAt?: DateTimeFilter<"Portal"> | Date | string
    updatedAt?: DateTimeFilter<"Portal"> | Date | string
    dao?: XOR<DaoRelationFilter, DaoWhereInput>
  }, "id">

  export type PortalOrderByWithAggregationInput = {
    id?: SortOrder
    daoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PortalCountOrderByAggregateInput
    _avg?: PortalAvgOrderByAggregateInput
    _max?: PortalMaxOrderByAggregateInput
    _min?: PortalMinOrderByAggregateInput
    _sum?: PortalSumOrderByAggregateInput
  }

  export type PortalScalarWhereWithAggregatesInput = {
    AND?: PortalScalarWhereWithAggregatesInput | PortalScalarWhereWithAggregatesInput[]
    OR?: PortalScalarWhereWithAggregatesInput[]
    NOT?: PortalScalarWhereWithAggregatesInput | PortalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portal"> | number
    daoId?: IntWithAggregatesFilter<"Portal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Portal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Portal"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    roles?: RoleListRelationFilter
    sessions?: SessionListRelationFilter
    memories?: UserMemoryListRelationFilter
    conversations?: ConversationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    roles?: RoleOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    memories?: UserMemoryOrderByRelationAggregateInput
    conversations?: ConversationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringNullableFilter<"User"> | string | null
    roles?: RoleListRelationFilter
    sessions?: SessionListRelationFilter
    memories?: UserMemoryListRelationFilter
    conversations?: ConversationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    permissions?: PermissionListRelationFilter
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    permissions?: PermissionOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    permissions?: PermissionListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
    roles?: RoleListRelationFilter
    actions?: DharmaActionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    actions?: DharmaActionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    roles?: RoleListRelationFilter
    actions?: DharmaActionListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permission"> | number
    name?: StringWithAggregatesFilter<"Permission"> | string
  }

  export type DharmaActionWhereInput = {
    AND?: DharmaActionWhereInput | DharmaActionWhereInput[]
    OR?: DharmaActionWhereInput[]
    NOT?: DharmaActionWhereInput | DharmaActionWhereInput[]
    id?: IntFilter<"DharmaAction"> | number
    name?: StringFilter<"DharmaAction"> | string
    permissions?: PermissionListRelationFilter
  }

  export type DharmaActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    permissions?: PermissionOrderByRelationAggregateInput
  }

  export type DharmaActionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DharmaActionWhereInput | DharmaActionWhereInput[]
    OR?: DharmaActionWhereInput[]
    NOT?: DharmaActionWhereInput | DharmaActionWhereInput[]
    name?: StringFilter<"DharmaAction"> | string
    permissions?: PermissionListRelationFilter
  }, "id">

  export type DharmaActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DharmaActionCountOrderByAggregateInput
    _avg?: DharmaActionAvgOrderByAggregateInput
    _max?: DharmaActionMaxOrderByAggregateInput
    _min?: DharmaActionMinOrderByAggregateInput
    _sum?: DharmaActionSumOrderByAggregateInput
  }

  export type DharmaActionScalarWhereWithAggregatesInput = {
    AND?: DharmaActionScalarWhereWithAggregatesInput | DharmaActionScalarWhereWithAggregatesInput[]
    OR?: DharmaActionScalarWhereWithAggregatesInput[]
    NOT?: DharmaActionScalarWhereWithAggregatesInput | DharmaActionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DharmaAction"> | number
    name?: StringWithAggregatesFilter<"DharmaAction"> | string
  }

  export type ConversationWhereInput = {
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    id?: IntFilter<"Conversation"> | number
    content?: StringFilter<"Conversation"> | string
    userId?: IntFilter<"Conversation"> | number
    dharmabeingId?: IntFilter<"Conversation"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    dharmabeing?: XOR<DharmabeingRelationFilter, DharmabeingWhereInput>
  }

  export type ConversationOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
    user?: UserOrderByWithRelationInput
    dharmabeing?: DharmabeingOrderByWithRelationInput
  }

  export type ConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConversationWhereInput | ConversationWhereInput[]
    OR?: ConversationWhereInput[]
    NOT?: ConversationWhereInput | ConversationWhereInput[]
    content?: StringFilter<"Conversation"> | string
    userId?: IntFilter<"Conversation"> | number
    dharmabeingId?: IntFilter<"Conversation"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    dharmabeing?: XOR<DharmabeingRelationFilter, DharmabeingWhereInput>
  }, "id">

  export type ConversationOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
    _count?: ConversationCountOrderByAggregateInput
    _avg?: ConversationAvgOrderByAggregateInput
    _max?: ConversationMaxOrderByAggregateInput
    _min?: ConversationMinOrderByAggregateInput
    _sum?: ConversationSumOrderByAggregateInput
  }

  export type ConversationScalarWhereWithAggregatesInput = {
    AND?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    OR?: ConversationScalarWhereWithAggregatesInput[]
    NOT?: ConversationScalarWhereWithAggregatesInput | ConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conversation"> | number
    content?: StringWithAggregatesFilter<"Conversation"> | string
    userId?: IntWithAggregatesFilter<"Conversation"> | number
    dharmabeingId?: IntWithAggregatesFilter<"Conversation"> | number
  }

  export type UserMemoryWhereInput = {
    AND?: UserMemoryWhereInput | UserMemoryWhereInput[]
    OR?: UserMemoryWhereInput[]
    NOT?: UserMemoryWhereInput | UserMemoryWhereInput[]
    id?: IntFilter<"UserMemory"> | number
    content?: StringFilter<"UserMemory"> | string
    userId?: IntFilter<"UserMemory"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type UserMemoryOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserMemoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserMemoryWhereInput | UserMemoryWhereInput[]
    OR?: UserMemoryWhereInput[]
    NOT?: UserMemoryWhereInput | UserMemoryWhereInput[]
    content?: StringFilter<"UserMemory"> | string
    userId?: IntFilter<"UserMemory"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type UserMemoryOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    _count?: UserMemoryCountOrderByAggregateInput
    _avg?: UserMemoryAvgOrderByAggregateInput
    _max?: UserMemoryMaxOrderByAggregateInput
    _min?: UserMemoryMinOrderByAggregateInput
    _sum?: UserMemorySumOrderByAggregateInput
  }

  export type UserMemoryScalarWhereWithAggregatesInput = {
    AND?: UserMemoryScalarWhereWithAggregatesInput | UserMemoryScalarWhereWithAggregatesInput[]
    OR?: UserMemoryScalarWhereWithAggregatesInput[]
    NOT?: UserMemoryScalarWhereWithAggregatesInput | UserMemoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserMemory"> | number
    content?: StringWithAggregatesFilter<"UserMemory"> | string
    userId?: IntWithAggregatesFilter<"UserMemory"> | number
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    hashedSessionToken?: StringFilter<"Session"> | string
    antiCSRFToken?: StringFilter<"Session"> | string
    publicData?: StringNullableFilter<"Session"> | string | null
    privateData?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: IntFilter<"Session"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrderInput | SortOrder
    privateData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hashedSessionToken?: string
    antiCSRFToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    publicData?: StringNullableFilter<"Session"> | string | null
    privateData?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: IntFilter<"Session"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "hashedSessionToken" | "antiCSRFToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrderInput | SortOrder
    privateData?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Session"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    hashedSessionToken?: StringWithAggregatesFilter<"Session"> | string
    antiCSRFToken?: StringWithAggregatesFilter<"Session"> | string
    publicData?: StringNullableWithAggregatesFilter<"Session"> | string | null
    privateData?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    userId?: IntWithAggregatesFilter<"Session"> | number
  }

  export type DatabaseWhereInput = {
    AND?: DatabaseWhereInput | DatabaseWhereInput[]
    OR?: DatabaseWhereInput[]
    NOT?: DatabaseWhereInput | DatabaseWhereInput[]
    id?: IntFilter<"Database"> | number
    name?: StringFilter<"Database"> | string
    models?: ModelListRelationFilter
  }

  export type DatabaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    models?: ModelOrderByRelationAggregateInput
  }

  export type DatabaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DatabaseWhereInput | DatabaseWhereInput[]
    OR?: DatabaseWhereInput[]
    NOT?: DatabaseWhereInput | DatabaseWhereInput[]
    name?: StringFilter<"Database"> | string
    models?: ModelListRelationFilter
  }, "id">

  export type DatabaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DatabaseCountOrderByAggregateInput
    _avg?: DatabaseAvgOrderByAggregateInput
    _max?: DatabaseMaxOrderByAggregateInput
    _min?: DatabaseMinOrderByAggregateInput
    _sum?: DatabaseSumOrderByAggregateInput
  }

  export type DatabaseScalarWhereWithAggregatesInput = {
    AND?: DatabaseScalarWhereWithAggregatesInput | DatabaseScalarWhereWithAggregatesInput[]
    OR?: DatabaseScalarWhereWithAggregatesInput[]
    NOT?: DatabaseScalarWhereWithAggregatesInput | DatabaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Database"> | number
    name?: StringWithAggregatesFilter<"Database"> | string
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: IntFilter<"Model"> | number
    name?: StringFilter<"Model"> | string
    description?: StringFilter<"Model"> | string
    databaseId?: IntFilter<"Model"> | number
    attributes?: AttributeListRelationFilter
    table?: XOR<DatabaseRelationFilter, DatabaseWhereInput>
    relationshipsFrom?: RelationshipListRelationFilter
    relationshipsTo?: RelationshipListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    databaseId?: SortOrder
    attributes?: AttributeOrderByRelationAggregateInput
    table?: DatabaseOrderByWithRelationInput
    relationshipsFrom?: RelationshipOrderByRelationAggregateInput
    relationshipsTo?: RelationshipOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringFilter<"Model"> | string
    description?: StringFilter<"Model"> | string
    databaseId?: IntFilter<"Model"> | number
    attributes?: AttributeListRelationFilter
    table?: XOR<DatabaseRelationFilter, DatabaseWhereInput>
    relationshipsFrom?: RelationshipListRelationFilter
    relationshipsTo?: RelationshipListRelationFilter
  }, "id">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    databaseId?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Model"> | number
    name?: StringWithAggregatesFilter<"Model"> | string
    description?: StringWithAggregatesFilter<"Model"> | string
    databaseId?: IntWithAggregatesFilter<"Model"> | number
  }

  export type AttributeWhereInput = {
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    dataType?: StringFilter<"Attribute"> | string
    constraints?: StringNullableFilter<"Attribute"> | string | null
    isPrimaryKey?: BoolFilter<"Attribute"> | boolean
    foreignKeyTo?: StringNullableFilter<"Attribute"> | string | null
    modelId?: IntFilter<"Attribute"> | number
    model?: XOR<ModelRelationFilter, ModelWhereInput>
  }

  export type AttributeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    constraints?: SortOrderInput | SortOrder
    isPrimaryKey?: SortOrder
    foreignKeyTo?: SortOrderInput | SortOrder
    modelId?: SortOrder
    model?: ModelOrderByWithRelationInput
  }

  export type AttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttributeWhereInput | AttributeWhereInput[]
    OR?: AttributeWhereInput[]
    NOT?: AttributeWhereInput | AttributeWhereInput[]
    name?: StringFilter<"Attribute"> | string
    dataType?: StringFilter<"Attribute"> | string
    constraints?: StringNullableFilter<"Attribute"> | string | null
    isPrimaryKey?: BoolFilter<"Attribute"> | boolean
    foreignKeyTo?: StringNullableFilter<"Attribute"> | string | null
    modelId?: IntFilter<"Attribute"> | number
    model?: XOR<ModelRelationFilter, ModelWhereInput>
  }, "id">

  export type AttributeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    constraints?: SortOrderInput | SortOrder
    isPrimaryKey?: SortOrder
    foreignKeyTo?: SortOrderInput | SortOrder
    modelId?: SortOrder
    _count?: AttributeCountOrderByAggregateInput
    _avg?: AttributeAvgOrderByAggregateInput
    _max?: AttributeMaxOrderByAggregateInput
    _min?: AttributeMinOrderByAggregateInput
    _sum?: AttributeSumOrderByAggregateInput
  }

  export type AttributeScalarWhereWithAggregatesInput = {
    AND?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    OR?: AttributeScalarWhereWithAggregatesInput[]
    NOT?: AttributeScalarWhereWithAggregatesInput | AttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attribute"> | number
    name?: StringWithAggregatesFilter<"Attribute"> | string
    dataType?: StringWithAggregatesFilter<"Attribute"> | string
    constraints?: StringNullableWithAggregatesFilter<"Attribute"> | string | null
    isPrimaryKey?: BoolWithAggregatesFilter<"Attribute"> | boolean
    foreignKeyTo?: StringNullableWithAggregatesFilter<"Attribute"> | string | null
    modelId?: IntWithAggregatesFilter<"Attribute"> | number
  }

  export type RelationshipWhereInput = {
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    id?: IntFilter<"Relationship"> | number
    modelIdFrom?: IntFilter<"Relationship"> | number
    modelIdTo?: IntFilter<"Relationship"> | number
    type?: StringFilter<"Relationship"> | string
    onDelete?: StringNullableFilter<"Relationship"> | string | null
    onUpdate?: StringNullableFilter<"Relationship"> | string | null
    modelFrom?: XOR<ModelRelationFilter, ModelWhereInput>
    modelTo?: XOR<ModelRelationFilter, ModelWhereInput>
  }

  export type RelationshipOrderByWithRelationInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
    type?: SortOrder
    onDelete?: SortOrderInput | SortOrder
    onUpdate?: SortOrderInput | SortOrder
    modelFrom?: ModelOrderByWithRelationInput
    modelTo?: ModelOrderByWithRelationInput
  }

  export type RelationshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RelationshipWhereInput | RelationshipWhereInput[]
    OR?: RelationshipWhereInput[]
    NOT?: RelationshipWhereInput | RelationshipWhereInput[]
    modelIdFrom?: IntFilter<"Relationship"> | number
    modelIdTo?: IntFilter<"Relationship"> | number
    type?: StringFilter<"Relationship"> | string
    onDelete?: StringNullableFilter<"Relationship"> | string | null
    onUpdate?: StringNullableFilter<"Relationship"> | string | null
    modelFrom?: XOR<ModelRelationFilter, ModelWhereInput>
    modelTo?: XOR<ModelRelationFilter, ModelWhereInput>
  }, "id">

  export type RelationshipOrderByWithAggregationInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
    type?: SortOrder
    onDelete?: SortOrderInput | SortOrder
    onUpdate?: SortOrderInput | SortOrder
    _count?: RelationshipCountOrderByAggregateInput
    _avg?: RelationshipAvgOrderByAggregateInput
    _max?: RelationshipMaxOrderByAggregateInput
    _min?: RelationshipMinOrderByAggregateInput
    _sum?: RelationshipSumOrderByAggregateInput
  }

  export type RelationshipScalarWhereWithAggregatesInput = {
    AND?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    OR?: RelationshipScalarWhereWithAggregatesInput[]
    NOT?: RelationshipScalarWhereWithAggregatesInput | RelationshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relationship"> | number
    modelIdFrom?: IntWithAggregatesFilter<"Relationship"> | number
    modelIdTo?: IntWithAggregatesFilter<"Relationship"> | number
    type?: StringWithAggregatesFilter<"Relationship"> | string
    onDelete?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
    onUpdate?: StringNullableWithAggregatesFilter<"Relationship"> | string | null
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    fileName?: StringFilter<"File"> | string
    fileType?: StringFilter<"File"> | string
    filePath?: StringFilter<"File"> | string
    hash?: StringFilter<"File"> | string
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    hash?: SortOrder
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    hash?: string
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    fileName?: StringFilter<"File"> | string
    fileType?: StringFilter<"File"> | string
    filePath?: StringFilter<"File"> | string
  }, "id" | "hash">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    hash?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    fileName?: StringWithAggregatesFilter<"File"> | string
    fileType?: StringWithAggregatesFilter<"File"> | string
    filePath?: StringWithAggregatesFilter<"File"> | string
    hash?: StringWithAggregatesFilter<"File"> | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: IntFilter<"Test"> | number
    testName?: StringFilter<"Test"> | string
    description?: StringFilter<"Test"> | string
    testType?: StringFilter<"Test"> | string
    filePath?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    executions?: ExecutionListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    testName?: SortOrder
    description?: SortOrder
    testType?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    executions?: ExecutionOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    testName?: StringFilter<"Test"> | string
    description?: StringFilter<"Test"> | string
    testType?: StringFilter<"Test"> | string
    filePath?: StringFilter<"Test"> | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    executions?: ExecutionListRelationFilter
  }, "id">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    testName?: SortOrder
    description?: SortOrder
    testType?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Test"> | number
    testName?: StringWithAggregatesFilter<"Test"> | string
    description?: StringWithAggregatesFilter<"Test"> | string
    testType?: StringWithAggregatesFilter<"Test"> | string
    filePath?: StringWithAggregatesFilter<"Test"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type ExecutionWhereInput = {
    AND?: ExecutionWhereInput | ExecutionWhereInput[]
    OR?: ExecutionWhereInput[]
    NOT?: ExecutionWhereInput | ExecutionWhereInput[]
    id?: IntFilter<"Execution"> | number
    testId?: IntFilter<"Execution"> | number
    status?: StringFilter<"Execution"> | string
    output?: StringNullableFilter<"Execution"> | string | null
    createdAt?: DateTimeFilter<"Execution"> | Date | string
    test?: XOR<TestRelationFilter, TestWhereInput>
  }

  export type ExecutionOrderByWithRelationInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    output?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    test?: TestOrderByWithRelationInput
  }

  export type ExecutionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExecutionWhereInput | ExecutionWhereInput[]
    OR?: ExecutionWhereInput[]
    NOT?: ExecutionWhereInput | ExecutionWhereInput[]
    testId?: IntFilter<"Execution"> | number
    status?: StringFilter<"Execution"> | string
    output?: StringNullableFilter<"Execution"> | string | null
    createdAt?: DateTimeFilter<"Execution"> | Date | string
    test?: XOR<TestRelationFilter, TestWhereInput>
  }, "id">

  export type ExecutionOrderByWithAggregationInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    output?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExecutionCountOrderByAggregateInput
    _avg?: ExecutionAvgOrderByAggregateInput
    _max?: ExecutionMaxOrderByAggregateInput
    _min?: ExecutionMinOrderByAggregateInput
    _sum?: ExecutionSumOrderByAggregateInput
  }

  export type ExecutionScalarWhereWithAggregatesInput = {
    AND?: ExecutionScalarWhereWithAggregatesInput | ExecutionScalarWhereWithAggregatesInput[]
    OR?: ExecutionScalarWhereWithAggregatesInput[]
    NOT?: ExecutionScalarWhereWithAggregatesInput | ExecutionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Execution"> | number
    testId?: IntWithAggregatesFilter<"Execution"> | number
    status?: StringWithAggregatesFilter<"Execution"> | string
    output?: StringNullableWithAggregatesFilter<"Execution"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Execution"> | Date | string
  }

  export type DharmabeingCreateInput = {
    name: string
    type: string
    attributes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions: string
    conversations?: ConversationCreateNestedManyWithoutDharmabeingInput
  }

  export type DharmabeingUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    attributes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions: string
    conversations?: ConversationUncheckedCreateNestedManyWithoutDharmabeingInput
  }

  export type DharmabeingUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
    conversations?: ConversationUpdateManyWithoutDharmabeingNestedInput
  }

  export type DharmabeingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
    conversations?: ConversationUncheckedUpdateManyWithoutDharmabeingNestedInput
  }

  export type DharmabeingUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DharmabeingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DaoCreateInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DaoCreateNestedOneWithoutChildrenInput
    children?: DaoCreateNestedManyWithoutParentInput
    portals?: PortalCreateNestedManyWithoutDaoInput
  }

  export type DaoUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    children?: DaoUncheckedCreateNestedManyWithoutParentInput
    portals?: PortalUncheckedCreateNestedManyWithoutDaoInput
  }

  export type DaoUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DaoUpdateOneWithoutChildrenNestedInput
    children?: DaoUpdateManyWithoutParentNestedInput
    portals?: PortalUpdateManyWithoutDaoNestedInput
  }

  export type DaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: DaoUncheckedUpdateManyWithoutParentNestedInput
    portals?: PortalUncheckedUpdateManyWithoutDaoNestedInput
  }

  export type DaoUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PortalCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    dao: DaoCreateNestedOneWithoutPortalsInput
  }

  export type PortalUncheckedCreateInput = {
    id?: number
    daoId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dao?: DaoUpdateOneRequiredWithoutPortalsNestedInput
  }

  export type PortalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    daoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    daoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    hashedPassword?: string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memories?: UserMemoryCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memories?: UserMemoryUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleCreateInput = {
    name: string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionCreateInput = {
    name: string
    roles?: RoleCreateNestedManyWithoutPermissionsInput
    actions?: DharmaActionCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: number
    name: string
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
    actions?: DharmaActionUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
    actions?: DharmaActionUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
    actions?: DharmaActionUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaActionCreateInput = {
    name: string
    permissions?: PermissionCreateNestedManyWithoutActionsInput
  }

  export type DharmaActionUncheckedCreateInput = {
    id?: number
    name: string
    permissions?: PermissionUncheckedCreateNestedManyWithoutActionsInput
  }

  export type DharmaActionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUpdateManyWithoutActionsNestedInput
  }

  export type DharmaActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUncheckedUpdateManyWithoutActionsNestedInput
  }

  export type DharmaActionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationCreateInput = {
    content: string
    user: UserCreateNestedOneWithoutConversationsInput
    dharmabeing: DharmabeingCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateInput = {
    id?: number
    content: string
    userId: number
    dharmabeingId: number
  }

  export type ConversationUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
    dharmabeing?: DharmabeingUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    dharmabeingId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    dharmabeingId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMemoryCreateInput = {
    content: string
    user: UserCreateNestedOneWithoutMemoriesInput
  }

  export type UserMemoryUncheckedCreateInput = {
    id?: number
    content: string
    userId: number
  }

  export type UserMemoryUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMemoriesNestedInput
  }

  export type UserMemoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserMemoryUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserMemoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionCreateInput = {
    expiresAt: Date | string
    hashedSessionToken: string
    antiCSRFToken: string
    publicData?: string | null
    privateData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: number
    expiresAt: Date | string
    hashedSessionToken: string
    antiCSRFToken: string
    publicData?: string | null
    privateData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type SessionUpdateInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SessionUpdateManyMutationInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DatabaseCreateInput = {
    name: string
    models?: ModelCreateNestedManyWithoutTableInput
  }

  export type DatabaseUncheckedCreateInput = {
    id?: number
    name: string
    models?: ModelUncheckedCreateNestedManyWithoutTableInput
  }

  export type DatabaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    models?: ModelUpdateManyWithoutTableNestedInput
  }

  export type DatabaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    models?: ModelUncheckedUpdateManyWithoutTableNestedInput
  }

  export type DatabaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModelCreateInput = {
    name: string
    description: string
    attributes?: AttributeCreateNestedManyWithoutModelInput
    table: DatabaseCreateNestedOneWithoutModelsInput
    relationshipsFrom?: RelationshipCreateNestedManyWithoutModelFromInput
    relationshipsTo?: RelationshipCreateNestedManyWithoutModelToInput
  }

  export type ModelUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    databaseId: number
    attributes?: AttributeUncheckedCreateNestedManyWithoutModelInput
    relationshipsFrom?: RelationshipUncheckedCreateNestedManyWithoutModelFromInput
    relationshipsTo?: RelationshipUncheckedCreateNestedManyWithoutModelToInput
  }

  export type ModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUpdateManyWithoutModelNestedInput
    table?: DatabaseUpdateOneRequiredWithoutModelsNestedInput
    relationshipsFrom?: RelationshipUpdateManyWithoutModelFromNestedInput
    relationshipsTo?: RelationshipUpdateManyWithoutModelToNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    databaseId?: IntFieldUpdateOperationsInput | number
    attributes?: AttributeUncheckedUpdateManyWithoutModelNestedInput
    relationshipsFrom?: RelationshipUncheckedUpdateManyWithoutModelFromNestedInput
    relationshipsTo?: RelationshipUncheckedUpdateManyWithoutModelToNestedInput
  }

  export type ModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    databaseId?: IntFieldUpdateOperationsInput | number
  }

  export type AttributeCreateInput = {
    name: string
    dataType: string
    constraints?: string | null
    isPrimaryKey?: boolean
    foreignKeyTo?: string | null
    model: ModelCreateNestedOneWithoutAttributesInput
  }

  export type AttributeUncheckedCreateInput = {
    id?: number
    name: string
    dataType: string
    constraints?: string | null
    isPrimaryKey?: boolean
    foreignKeyTo?: string | null
    modelId: number
  }

  export type AttributeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
    model?: ModelUpdateOneRequiredWithoutAttributesNestedInput
  }

  export type AttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type AttributeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationshipCreateInput = {
    type: string
    onDelete?: string | null
    onUpdate?: string | null
    modelFrom: ModelCreateNestedOneWithoutRelationshipsFromInput
    modelTo: ModelCreateNestedOneWithoutRelationshipsToInput
  }

  export type RelationshipUncheckedCreateInput = {
    id?: number
    modelIdFrom: number
    modelIdTo: number
    type: string
    onDelete?: string | null
    onUpdate?: string | null
  }

  export type RelationshipUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
    modelFrom?: ModelUpdateOneRequiredWithoutRelationshipsFromNestedInput
    modelTo?: ModelUpdateOneRequiredWithoutRelationshipsToNestedInput
  }

  export type RelationshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelIdFrom?: IntFieldUpdateOperationsInput | number
    modelIdTo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelIdFrom?: IntFieldUpdateOperationsInput | number
    modelIdTo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateInput = {
    fileName: string
    fileType: string
    filePath: string
    hash: string
  }

  export type FileUncheckedCreateInput = {
    id?: number
    fileName: string
    fileType: string
    filePath: string
    hash: string
  }

  export type FileUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type FileUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
  }

  export type TestCreateInput = {
    testName: string
    description: string
    testType: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: ExecutionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: number
    testName: string
    description: string
    testType: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    executions?: ExecutionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    testName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: ExecutionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    executions?: ExecutionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestUpdateManyMutationInput = {
    testName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionCreateInput = {
    status: string
    output?: string | null
    createdAt?: Date | string
    test: TestCreateNestedOneWithoutExecutionsInput
  }

  export type ExecutionUncheckedCreateInput = {
    id?: number
    testId: number
    status: string
    output?: string | null
    createdAt?: Date | string
  }

  export type ExecutionUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneRequiredWithoutExecutionsNestedInput
  }

  export type ExecutionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    testId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ConversationListRelationFilter = {
    every?: ConversationWhereInput
    some?: ConversationWhereInput
    none?: ConversationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DharmabeingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmabeingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DharmabeingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmabeingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmabeingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DaoNullableRelationFilter = {
    is?: DaoWhereInput | null
    isNot?: DaoWhereInput | null
  }

  export type DaoListRelationFilter = {
    every?: DaoWhereInput
    some?: DaoWhereInput
    none?: DaoWhereInput
  }

  export type PortalListRelationFilter = {
    every?: PortalWhereInput
    some?: PortalWhereInput
    none?: PortalWhereInput
  }

  export type DaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DaoCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    accounts?: SortOrder
    canvas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type DaoAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    parentId?: SortOrder
  }

  export type DaoMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    accounts?: SortOrder
    canvas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type DaoMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    accounts?: SortOrder
    canvas?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parentId?: SortOrder
  }

  export type DaoSumOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    parentId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DaoRelationFilter = {
    is?: DaoWhereInput
    isNot?: DaoWhereInput
  }

  export type PortalCountOrderByAggregateInput = {
    id?: SortOrder
    daoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalAvgOrderByAggregateInput = {
    id?: SortOrder
    daoId?: SortOrder
  }

  export type PortalMaxOrderByAggregateInput = {
    id?: SortOrder
    daoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalMinOrderByAggregateInput = {
    id?: SortOrder
    daoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PortalSumOrderByAggregateInput = {
    id?: SortOrder
    daoId?: SortOrder
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserMemoryListRelationFilter = {
    every?: UserMemoryWhereInput
    some?: UserMemoryWhereInput
    none?: UserMemoryWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserMemoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DharmaActionListRelationFilter = {
    every?: DharmaActionWhereInput
    some?: DharmaActionWhereInput
    none?: DharmaActionWhereInput
  }

  export type DharmaActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DharmaActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DharmaActionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DharmaActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DharmaActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DharmaActionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DharmabeingRelationFilter = {
    is?: DharmabeingWhereInput
    isNot?: DharmabeingWhereInput
  }

  export type ConversationCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
  }

  export type ConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
  }

  export type ConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
  }

  export type ConversationMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
  }

  export type ConversationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    dharmabeingId?: SortOrder
  }

  export type UserMemoryCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
  }

  export type UserMemoryAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserMemoryMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
  }

  export type UserMemoryMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    userId?: SortOrder
  }

  export type UserMemorySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    hashedSessionToken?: SortOrder
    antiCSRFToken?: SortOrder
    publicData?: SortOrder
    privateData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatabaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DatabaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DatabaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DatabaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DatabaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AttributeListRelationFilter = {
    every?: AttributeWhereInput
    some?: AttributeWhereInput
    none?: AttributeWhereInput
  }

  export type DatabaseRelationFilter = {
    is?: DatabaseWhereInput
    isNot?: DatabaseWhereInput
  }

  export type RelationshipListRelationFilter = {
    every?: RelationshipWhereInput
    some?: RelationshipWhereInput
    none?: RelationshipWhereInput
  }

  export type AttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RelationshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    databaseId?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    id?: SortOrder
    databaseId?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    databaseId?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    databaseId?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    id?: SortOrder
    databaseId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModelRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type AttributeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    constraints?: SortOrder
    isPrimaryKey?: SortOrder
    foreignKeyTo?: SortOrder
    modelId?: SortOrder
  }

  export type AttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type AttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    constraints?: SortOrder
    isPrimaryKey?: SortOrder
    foreignKeyTo?: SortOrder
    modelId?: SortOrder
  }

  export type AttributeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataType?: SortOrder
    constraints?: SortOrder
    isPrimaryKey?: SortOrder
    foreignKeyTo?: SortOrder
    modelId?: SortOrder
  }

  export type AttributeSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RelationshipCountOrderByAggregateInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
    type?: SortOrder
    onDelete?: SortOrder
    onUpdate?: SortOrder
  }

  export type RelationshipAvgOrderByAggregateInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
  }

  export type RelationshipMaxOrderByAggregateInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
    type?: SortOrder
    onDelete?: SortOrder
    onUpdate?: SortOrder
  }

  export type RelationshipMinOrderByAggregateInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
    type?: SortOrder
    onDelete?: SortOrder
    onUpdate?: SortOrder
  }

  export type RelationshipSumOrderByAggregateInput = {
    id?: SortOrder
    modelIdFrom?: SortOrder
    modelIdTo?: SortOrder
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    hash?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    hash?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    filePath?: SortOrder
    hash?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExecutionListRelationFilter = {
    every?: ExecutionWhereInput
    some?: ExecutionWhereInput
    none?: ExecutionWhereInput
  }

  export type ExecutionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    testName?: SortOrder
    description?: SortOrder
    testType?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    testName?: SortOrder
    description?: SortOrder
    testType?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    testName?: SortOrder
    description?: SortOrder
    testType?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TestRelationFilter = {
    is?: TestWhereInput
    isNot?: TestWhereInput
  }

  export type ExecutionCountOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
  }

  export type ExecutionAvgOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
  }

  export type ExecutionMaxOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
  }

  export type ExecutionMinOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
    status?: SortOrder
    output?: SortOrder
    createdAt?: SortOrder
  }

  export type ExecutionSumOrderByAggregateInput = {
    id?: SortOrder
    testId?: SortOrder
  }

  export type ConversationCreateNestedManyWithoutDharmabeingInput = {
    create?: XOR<ConversationCreateWithoutDharmabeingInput, ConversationUncheckedCreateWithoutDharmabeingInput> | ConversationCreateWithoutDharmabeingInput[] | ConversationUncheckedCreateWithoutDharmabeingInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutDharmabeingInput | ConversationCreateOrConnectWithoutDharmabeingInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutDharmabeingInput = {
    create?: XOR<ConversationCreateWithoutDharmabeingInput, ConversationUncheckedCreateWithoutDharmabeingInput> | ConversationCreateWithoutDharmabeingInput[] | ConversationUncheckedCreateWithoutDharmabeingInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutDharmabeingInput | ConversationCreateOrConnectWithoutDharmabeingInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ConversationUpdateManyWithoutDharmabeingNestedInput = {
    create?: XOR<ConversationCreateWithoutDharmabeingInput, ConversationUncheckedCreateWithoutDharmabeingInput> | ConversationCreateWithoutDharmabeingInput[] | ConversationUncheckedCreateWithoutDharmabeingInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutDharmabeingInput | ConversationCreateOrConnectWithoutDharmabeingInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutDharmabeingInput | ConversationUpsertWithWhereUniqueWithoutDharmabeingInput[]
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutDharmabeingInput | ConversationUpdateWithWhereUniqueWithoutDharmabeingInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutDharmabeingInput | ConversationUpdateManyWithWhereWithoutDharmabeingInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConversationUncheckedUpdateManyWithoutDharmabeingNestedInput = {
    create?: XOR<ConversationCreateWithoutDharmabeingInput, ConversationUncheckedCreateWithoutDharmabeingInput> | ConversationCreateWithoutDharmabeingInput[] | ConversationUncheckedCreateWithoutDharmabeingInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutDharmabeingInput | ConversationCreateOrConnectWithoutDharmabeingInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutDharmabeingInput | ConversationUpsertWithWhereUniqueWithoutDharmabeingInput[]
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutDharmabeingInput | ConversationUpdateWithWhereUniqueWithoutDharmabeingInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutDharmabeingInput | ConversationUpdateManyWithWhereWithoutDharmabeingInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type DaoCreateNestedOneWithoutChildrenInput = {
    create?: XOR<DaoCreateWithoutChildrenInput, DaoUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DaoCreateOrConnectWithoutChildrenInput
    connect?: DaoWhereUniqueInput
  }

  export type DaoCreateNestedManyWithoutParentInput = {
    create?: XOR<DaoCreateWithoutParentInput, DaoUncheckedCreateWithoutParentInput> | DaoCreateWithoutParentInput[] | DaoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DaoCreateOrConnectWithoutParentInput | DaoCreateOrConnectWithoutParentInput[]
    connect?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
  }

  export type PortalCreateNestedManyWithoutDaoInput = {
    create?: XOR<PortalCreateWithoutDaoInput, PortalUncheckedCreateWithoutDaoInput> | PortalCreateWithoutDaoInput[] | PortalUncheckedCreateWithoutDaoInput[]
    connectOrCreate?: PortalCreateOrConnectWithoutDaoInput | PortalCreateOrConnectWithoutDaoInput[]
    connect?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
  }

  export type DaoUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<DaoCreateWithoutParentInput, DaoUncheckedCreateWithoutParentInput> | DaoCreateWithoutParentInput[] | DaoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DaoCreateOrConnectWithoutParentInput | DaoCreateOrConnectWithoutParentInput[]
    connect?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
  }

  export type PortalUncheckedCreateNestedManyWithoutDaoInput = {
    create?: XOR<PortalCreateWithoutDaoInput, PortalUncheckedCreateWithoutDaoInput> | PortalCreateWithoutDaoInput[] | PortalUncheckedCreateWithoutDaoInput[]
    connectOrCreate?: PortalCreateOrConnectWithoutDaoInput | PortalCreateOrConnectWithoutDaoInput[]
    connect?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
  }

  export type DaoUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<DaoCreateWithoutChildrenInput, DaoUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DaoCreateOrConnectWithoutChildrenInput
    upsert?: DaoUpsertWithoutChildrenInput
    disconnect?: DaoWhereInput | boolean
    delete?: DaoWhereInput | boolean
    connect?: DaoWhereUniqueInput
    update?: XOR<XOR<DaoUpdateToOneWithWhereWithoutChildrenInput, DaoUpdateWithoutChildrenInput>, DaoUncheckedUpdateWithoutChildrenInput>
  }

  export type DaoUpdateManyWithoutParentNestedInput = {
    create?: XOR<DaoCreateWithoutParentInput, DaoUncheckedCreateWithoutParentInput> | DaoCreateWithoutParentInput[] | DaoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DaoCreateOrConnectWithoutParentInput | DaoCreateOrConnectWithoutParentInput[]
    upsert?: DaoUpsertWithWhereUniqueWithoutParentInput | DaoUpsertWithWhereUniqueWithoutParentInput[]
    set?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    disconnect?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    delete?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    connect?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    update?: DaoUpdateWithWhereUniqueWithoutParentInput | DaoUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DaoUpdateManyWithWhereWithoutParentInput | DaoUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DaoScalarWhereInput | DaoScalarWhereInput[]
  }

  export type PortalUpdateManyWithoutDaoNestedInput = {
    create?: XOR<PortalCreateWithoutDaoInput, PortalUncheckedCreateWithoutDaoInput> | PortalCreateWithoutDaoInput[] | PortalUncheckedCreateWithoutDaoInput[]
    connectOrCreate?: PortalCreateOrConnectWithoutDaoInput | PortalCreateOrConnectWithoutDaoInput[]
    upsert?: PortalUpsertWithWhereUniqueWithoutDaoInput | PortalUpsertWithWhereUniqueWithoutDaoInput[]
    set?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    disconnect?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    delete?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    connect?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    update?: PortalUpdateWithWhereUniqueWithoutDaoInput | PortalUpdateWithWhereUniqueWithoutDaoInput[]
    updateMany?: PortalUpdateManyWithWhereWithoutDaoInput | PortalUpdateManyWithWhereWithoutDaoInput[]
    deleteMany?: PortalScalarWhereInput | PortalScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DaoUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<DaoCreateWithoutParentInput, DaoUncheckedCreateWithoutParentInput> | DaoCreateWithoutParentInput[] | DaoUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DaoCreateOrConnectWithoutParentInput | DaoCreateOrConnectWithoutParentInput[]
    upsert?: DaoUpsertWithWhereUniqueWithoutParentInput | DaoUpsertWithWhereUniqueWithoutParentInput[]
    set?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    disconnect?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    delete?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    connect?: DaoWhereUniqueInput | DaoWhereUniqueInput[]
    update?: DaoUpdateWithWhereUniqueWithoutParentInput | DaoUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DaoUpdateManyWithWhereWithoutParentInput | DaoUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DaoScalarWhereInput | DaoScalarWhereInput[]
  }

  export type PortalUncheckedUpdateManyWithoutDaoNestedInput = {
    create?: XOR<PortalCreateWithoutDaoInput, PortalUncheckedCreateWithoutDaoInput> | PortalCreateWithoutDaoInput[] | PortalUncheckedCreateWithoutDaoInput[]
    connectOrCreate?: PortalCreateOrConnectWithoutDaoInput | PortalCreateOrConnectWithoutDaoInput[]
    upsert?: PortalUpsertWithWhereUniqueWithoutDaoInput | PortalUpsertWithWhereUniqueWithoutDaoInput[]
    set?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    disconnect?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    delete?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    connect?: PortalWhereUniqueInput | PortalWhereUniqueInput[]
    update?: PortalUpdateWithWhereUniqueWithoutDaoInput | PortalUpdateWithWhereUniqueWithoutDaoInput[]
    updateMany?: PortalUpdateManyWithWhereWithoutDaoInput | PortalUpdateManyWithWhereWithoutDaoInput[]
    deleteMany?: PortalScalarWhereInput | PortalScalarWhereInput[]
  }

  export type DaoCreateNestedOneWithoutPortalsInput = {
    create?: XOR<DaoCreateWithoutPortalsInput, DaoUncheckedCreateWithoutPortalsInput>
    connectOrCreate?: DaoCreateOrConnectWithoutPortalsInput
    connect?: DaoWhereUniqueInput
  }

  export type DaoUpdateOneRequiredWithoutPortalsNestedInput = {
    create?: XOR<DaoCreateWithoutPortalsInput, DaoUncheckedCreateWithoutPortalsInput>
    connectOrCreate?: DaoCreateOrConnectWithoutPortalsInput
    upsert?: DaoUpsertWithoutPortalsInput
    connect?: DaoWhereUniqueInput
    update?: XOR<XOR<DaoUpdateToOneWithWhereWithoutPortalsInput, DaoUpdateWithoutPortalsInput>, DaoUncheckedUpdateWithoutPortalsInput>
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserMemoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMemoryCreateWithoutUserInput, UserMemoryUncheckedCreateWithoutUserInput> | UserMemoryCreateWithoutUserInput[] | UserMemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMemoryCreateOrConnectWithoutUserInput | UserMemoryCreateOrConnectWithoutUserInput[]
    connect?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
  }

  export type ConversationCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserMemoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserMemoryCreateWithoutUserInput, UserMemoryUncheckedCreateWithoutUserInput> | UserMemoryCreateWithoutUserInput[] | UserMemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMemoryCreateOrConnectWithoutUserInput | UserMemoryCreateOrConnectWithoutUserInput[]
    connect?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
  }

  export type ConversationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserMemoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMemoryCreateWithoutUserInput, UserMemoryUncheckedCreateWithoutUserInput> | UserMemoryCreateWithoutUserInput[] | UserMemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMemoryCreateOrConnectWithoutUserInput | UserMemoryCreateOrConnectWithoutUserInput[]
    upsert?: UserMemoryUpsertWithWhereUniqueWithoutUserInput | UserMemoryUpsertWithWhereUniqueWithoutUserInput[]
    set?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    disconnect?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    delete?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    connect?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    update?: UserMemoryUpdateWithWhereUniqueWithoutUserInput | UserMemoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMemoryUpdateManyWithWhereWithoutUserInput | UserMemoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMemoryScalarWhereInput | UserMemoryScalarWhereInput[]
  }

  export type ConversationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserMemoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserMemoryCreateWithoutUserInput, UserMemoryUncheckedCreateWithoutUserInput> | UserMemoryCreateWithoutUserInput[] | UserMemoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserMemoryCreateOrConnectWithoutUserInput | UserMemoryCreateOrConnectWithoutUserInput[]
    upsert?: UserMemoryUpsertWithWhereUniqueWithoutUserInput | UserMemoryUpsertWithWhereUniqueWithoutUserInput[]
    set?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    disconnect?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    delete?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    connect?: UserMemoryWhereUniqueInput | UserMemoryWhereUniqueInput[]
    update?: UserMemoryUpdateWithWhereUniqueWithoutUserInput | UserMemoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserMemoryUpdateManyWithWhereWithoutUserInput | UserMemoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserMemoryScalarWhereInput | UserMemoryScalarWhereInput[]
  }

  export type ConversationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput> | ConversationCreateWithoutUserInput[] | ConversationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConversationCreateOrConnectWithoutUserInput | ConversationCreateOrConnectWithoutUserInput[]
    upsert?: ConversationUpsertWithWhereUniqueWithoutUserInput | ConversationUpsertWithWhereUniqueWithoutUserInput[]
    set?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    disconnect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    delete?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    connect?: ConversationWhereUniqueInput | ConversationWhereUniqueInput[]
    update?: ConversationUpdateWithWhereUniqueWithoutUserInput | ConversationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConversationUpdateManyWithWhereWithoutUserInput | ConversationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
  }

  export type PermissionCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type PermissionUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput> | PermissionCreateWithoutRolesInput[] | PermissionUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput | PermissionCreateOrConnectWithoutRolesInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutRolesInput | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutRolesInput | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutRolesInput | PermissionUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type DharmaActionCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<DharmaActionCreateWithoutPermissionsInput, DharmaActionUncheckedCreateWithoutPermissionsInput> | DharmaActionCreateWithoutPermissionsInput[] | DharmaActionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: DharmaActionCreateOrConnectWithoutPermissionsInput | DharmaActionCreateOrConnectWithoutPermissionsInput[]
    connect?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type DharmaActionUncheckedCreateNestedManyWithoutPermissionsInput = {
    create?: XOR<DharmaActionCreateWithoutPermissionsInput, DharmaActionUncheckedCreateWithoutPermissionsInput> | DharmaActionCreateWithoutPermissionsInput[] | DharmaActionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: DharmaActionCreateOrConnectWithoutPermissionsInput | DharmaActionCreateOrConnectWithoutPermissionsInput[]
    connect?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
  }

  export type RoleUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type DharmaActionUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<DharmaActionCreateWithoutPermissionsInput, DharmaActionUncheckedCreateWithoutPermissionsInput> | DharmaActionCreateWithoutPermissionsInput[] | DharmaActionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: DharmaActionCreateOrConnectWithoutPermissionsInput | DharmaActionCreateOrConnectWithoutPermissionsInput[]
    upsert?: DharmaActionUpsertWithWhereUniqueWithoutPermissionsInput | DharmaActionUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    disconnect?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    delete?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    connect?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    update?: DharmaActionUpdateWithWhereUniqueWithoutPermissionsInput | DharmaActionUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: DharmaActionUpdateManyWithWhereWithoutPermissionsInput | DharmaActionUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: DharmaActionScalarWhereInput | DharmaActionScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput> | RoleCreateWithoutPermissionsInput[] | RoleUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput | RoleCreateOrConnectWithoutPermissionsInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutPermissionsInput | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutPermissionsInput | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutPermissionsInput | RoleUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type DharmaActionUncheckedUpdateManyWithoutPermissionsNestedInput = {
    create?: XOR<DharmaActionCreateWithoutPermissionsInput, DharmaActionUncheckedCreateWithoutPermissionsInput> | DharmaActionCreateWithoutPermissionsInput[] | DharmaActionUncheckedCreateWithoutPermissionsInput[]
    connectOrCreate?: DharmaActionCreateOrConnectWithoutPermissionsInput | DharmaActionCreateOrConnectWithoutPermissionsInput[]
    upsert?: DharmaActionUpsertWithWhereUniqueWithoutPermissionsInput | DharmaActionUpsertWithWhereUniqueWithoutPermissionsInput[]
    set?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    disconnect?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    delete?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    connect?: DharmaActionWhereUniqueInput | DharmaActionWhereUniqueInput[]
    update?: DharmaActionUpdateWithWhereUniqueWithoutPermissionsInput | DharmaActionUpdateWithWhereUniqueWithoutPermissionsInput[]
    updateMany?: DharmaActionUpdateManyWithWhereWithoutPermissionsInput | DharmaActionUpdateManyWithWhereWithoutPermissionsInput[]
    deleteMany?: DharmaActionScalarWhereInput | DharmaActionScalarWhereInput[]
  }

  export type PermissionCreateNestedManyWithoutActionsInput = {
    create?: XOR<PermissionCreateWithoutActionsInput, PermissionUncheckedCreateWithoutActionsInput> | PermissionCreateWithoutActionsInput[] | PermissionUncheckedCreateWithoutActionsInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutActionsInput | PermissionCreateOrConnectWithoutActionsInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutActionsInput = {
    create?: XOR<PermissionCreateWithoutActionsInput, PermissionUncheckedCreateWithoutActionsInput> | PermissionCreateWithoutActionsInput[] | PermissionUncheckedCreateWithoutActionsInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutActionsInput | PermissionCreateOrConnectWithoutActionsInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type PermissionUpdateManyWithoutActionsNestedInput = {
    create?: XOR<PermissionCreateWithoutActionsInput, PermissionUncheckedCreateWithoutActionsInput> | PermissionCreateWithoutActionsInput[] | PermissionUncheckedCreateWithoutActionsInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutActionsInput | PermissionCreateOrConnectWithoutActionsInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutActionsInput | PermissionUpsertWithWhereUniqueWithoutActionsInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutActionsInput | PermissionUpdateWithWhereUniqueWithoutActionsInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutActionsInput | PermissionUpdateManyWithWhereWithoutActionsInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutActionsNestedInput = {
    create?: XOR<PermissionCreateWithoutActionsInput, PermissionUncheckedCreateWithoutActionsInput> | PermissionCreateWithoutActionsInput[] | PermissionUncheckedCreateWithoutActionsInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutActionsInput | PermissionCreateOrConnectWithoutActionsInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutActionsInput | PermissionUpsertWithWhereUniqueWithoutActionsInput[]
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutActionsInput | PermissionUpdateWithWhereUniqueWithoutActionsInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutActionsInput | PermissionUpdateManyWithWhereWithoutActionsInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutConversationsInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    connect?: UserWhereUniqueInput
  }

  export type DharmabeingCreateNestedOneWithoutConversationsInput = {
    create?: XOR<DharmabeingCreateWithoutConversationsInput, DharmabeingUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: DharmabeingCreateOrConnectWithoutConversationsInput
    connect?: DharmabeingWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutConversationsInput
    upsert?: UserUpsertWithoutConversationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConversationsInput, UserUpdateWithoutConversationsInput>, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type DharmabeingUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<DharmabeingCreateWithoutConversationsInput, DharmabeingUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: DharmabeingCreateOrConnectWithoutConversationsInput
    upsert?: DharmabeingUpsertWithoutConversationsInput
    connect?: DharmabeingWhereUniqueInput
    update?: XOR<XOR<DharmabeingUpdateToOneWithWhereWithoutConversationsInput, DharmabeingUpdateWithoutConversationsInput>, DharmabeingUncheckedUpdateWithoutConversationsInput>
  }

  export type UserCreateNestedOneWithoutMemoriesInput = {
    create?: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMemoriesNestedInput = {
    create?: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMemoriesInput
    upsert?: UserUpsertWithoutMemoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMemoriesInput, UserUpdateWithoutMemoriesInput>, UserUncheckedUpdateWithoutMemoriesInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ModelCreateNestedManyWithoutTableInput = {
    create?: XOR<ModelCreateWithoutTableInput, ModelUncheckedCreateWithoutTableInput> | ModelCreateWithoutTableInput[] | ModelUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutTableInput | ModelCreateOrConnectWithoutTableInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ModelCreateWithoutTableInput, ModelUncheckedCreateWithoutTableInput> | ModelCreateWithoutTableInput[] | ModelUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutTableInput | ModelCreateOrConnectWithoutTableInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type ModelUpdateManyWithoutTableNestedInput = {
    create?: XOR<ModelCreateWithoutTableInput, ModelUncheckedCreateWithoutTableInput> | ModelCreateWithoutTableInput[] | ModelUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutTableInput | ModelCreateOrConnectWithoutTableInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutTableInput | ModelUpsertWithWhereUniqueWithoutTableInput[]
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutTableInput | ModelUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutTableInput | ModelUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ModelCreateWithoutTableInput, ModelUncheckedCreateWithoutTableInput> | ModelCreateWithoutTableInput[] | ModelUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutTableInput | ModelCreateOrConnectWithoutTableInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutTableInput | ModelUpsertWithWhereUniqueWithoutTableInput[]
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutTableInput | ModelUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutTableInput | ModelUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type AttributeCreateNestedManyWithoutModelInput = {
    create?: XOR<AttributeCreateWithoutModelInput, AttributeUncheckedCreateWithoutModelInput> | AttributeCreateWithoutModelInput[] | AttributeUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutModelInput | AttributeCreateOrConnectWithoutModelInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type DatabaseCreateNestedOneWithoutModelsInput = {
    create?: XOR<DatabaseCreateWithoutModelsInput, DatabaseUncheckedCreateWithoutModelsInput>
    connectOrCreate?: DatabaseCreateOrConnectWithoutModelsInput
    connect?: DatabaseWhereUniqueInput
  }

  export type RelationshipCreateNestedManyWithoutModelFromInput = {
    create?: XOR<RelationshipCreateWithoutModelFromInput, RelationshipUncheckedCreateWithoutModelFromInput> | RelationshipCreateWithoutModelFromInput[] | RelationshipUncheckedCreateWithoutModelFromInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelFromInput | RelationshipCreateOrConnectWithoutModelFromInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipCreateNestedManyWithoutModelToInput = {
    create?: XOR<RelationshipCreateWithoutModelToInput, RelationshipUncheckedCreateWithoutModelToInput> | RelationshipCreateWithoutModelToInput[] | RelationshipUncheckedCreateWithoutModelToInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelToInput | RelationshipCreateOrConnectWithoutModelToInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type AttributeUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<AttributeCreateWithoutModelInput, AttributeUncheckedCreateWithoutModelInput> | AttributeCreateWithoutModelInput[] | AttributeUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutModelInput | AttributeCreateOrConnectWithoutModelInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutModelFromInput = {
    create?: XOR<RelationshipCreateWithoutModelFromInput, RelationshipUncheckedCreateWithoutModelFromInput> | RelationshipCreateWithoutModelFromInput[] | RelationshipUncheckedCreateWithoutModelFromInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelFromInput | RelationshipCreateOrConnectWithoutModelFromInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type RelationshipUncheckedCreateNestedManyWithoutModelToInput = {
    create?: XOR<RelationshipCreateWithoutModelToInput, RelationshipUncheckedCreateWithoutModelToInput> | RelationshipCreateWithoutModelToInput[] | RelationshipUncheckedCreateWithoutModelToInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelToInput | RelationshipCreateOrConnectWithoutModelToInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
  }

  export type AttributeUpdateManyWithoutModelNestedInput = {
    create?: XOR<AttributeCreateWithoutModelInput, AttributeUncheckedCreateWithoutModelInput> | AttributeCreateWithoutModelInput[] | AttributeUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutModelInput | AttributeCreateOrConnectWithoutModelInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutModelInput | AttributeUpsertWithWhereUniqueWithoutModelInput[]
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutModelInput | AttributeUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutModelInput | AttributeUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type DatabaseUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<DatabaseCreateWithoutModelsInput, DatabaseUncheckedCreateWithoutModelsInput>
    connectOrCreate?: DatabaseCreateOrConnectWithoutModelsInput
    upsert?: DatabaseUpsertWithoutModelsInput
    connect?: DatabaseWhereUniqueInput
    update?: XOR<XOR<DatabaseUpdateToOneWithWhereWithoutModelsInput, DatabaseUpdateWithoutModelsInput>, DatabaseUncheckedUpdateWithoutModelsInput>
  }

  export type RelationshipUpdateManyWithoutModelFromNestedInput = {
    create?: XOR<RelationshipCreateWithoutModelFromInput, RelationshipUncheckedCreateWithoutModelFromInput> | RelationshipCreateWithoutModelFromInput[] | RelationshipUncheckedCreateWithoutModelFromInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelFromInput | RelationshipCreateOrConnectWithoutModelFromInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutModelFromInput | RelationshipUpsertWithWhereUniqueWithoutModelFromInput[]
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutModelFromInput | RelationshipUpdateWithWhereUniqueWithoutModelFromInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutModelFromInput | RelationshipUpdateManyWithWhereWithoutModelFromInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUpdateManyWithoutModelToNestedInput = {
    create?: XOR<RelationshipCreateWithoutModelToInput, RelationshipUncheckedCreateWithoutModelToInput> | RelationshipCreateWithoutModelToInput[] | RelationshipUncheckedCreateWithoutModelToInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelToInput | RelationshipCreateOrConnectWithoutModelToInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutModelToInput | RelationshipUpsertWithWhereUniqueWithoutModelToInput[]
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutModelToInput | RelationshipUpdateWithWhereUniqueWithoutModelToInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutModelToInput | RelationshipUpdateManyWithWhereWithoutModelToInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type AttributeUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<AttributeCreateWithoutModelInput, AttributeUncheckedCreateWithoutModelInput> | AttributeCreateWithoutModelInput[] | AttributeUncheckedCreateWithoutModelInput[]
    connectOrCreate?: AttributeCreateOrConnectWithoutModelInput | AttributeCreateOrConnectWithoutModelInput[]
    upsert?: AttributeUpsertWithWhereUniqueWithoutModelInput | AttributeUpsertWithWhereUniqueWithoutModelInput[]
    set?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    disconnect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    delete?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    connect?: AttributeWhereUniqueInput | AttributeWhereUniqueInput[]
    update?: AttributeUpdateWithWhereUniqueWithoutModelInput | AttributeUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: AttributeUpdateManyWithWhereWithoutModelInput | AttributeUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutModelFromNestedInput = {
    create?: XOR<RelationshipCreateWithoutModelFromInput, RelationshipUncheckedCreateWithoutModelFromInput> | RelationshipCreateWithoutModelFromInput[] | RelationshipUncheckedCreateWithoutModelFromInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelFromInput | RelationshipCreateOrConnectWithoutModelFromInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutModelFromInput | RelationshipUpsertWithWhereUniqueWithoutModelFromInput[]
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutModelFromInput | RelationshipUpdateWithWhereUniqueWithoutModelFromInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutModelFromInput | RelationshipUpdateManyWithWhereWithoutModelFromInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type RelationshipUncheckedUpdateManyWithoutModelToNestedInput = {
    create?: XOR<RelationshipCreateWithoutModelToInput, RelationshipUncheckedCreateWithoutModelToInput> | RelationshipCreateWithoutModelToInput[] | RelationshipUncheckedCreateWithoutModelToInput[]
    connectOrCreate?: RelationshipCreateOrConnectWithoutModelToInput | RelationshipCreateOrConnectWithoutModelToInput[]
    upsert?: RelationshipUpsertWithWhereUniqueWithoutModelToInput | RelationshipUpsertWithWhereUniqueWithoutModelToInput[]
    set?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    disconnect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    delete?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    connect?: RelationshipWhereUniqueInput | RelationshipWhereUniqueInput[]
    update?: RelationshipUpdateWithWhereUniqueWithoutModelToInput | RelationshipUpdateWithWhereUniqueWithoutModelToInput[]
    updateMany?: RelationshipUpdateManyWithWhereWithoutModelToInput | RelationshipUpdateManyWithWhereWithoutModelToInput[]
    deleteMany?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
  }

  export type ModelCreateNestedOneWithoutAttributesInput = {
    create?: XOR<ModelCreateWithoutAttributesInput, ModelUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutAttributesInput
    connect?: ModelWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModelUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<ModelCreateWithoutAttributesInput, ModelUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutAttributesInput
    upsert?: ModelUpsertWithoutAttributesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutAttributesInput, ModelUpdateWithoutAttributesInput>, ModelUncheckedUpdateWithoutAttributesInput>
  }

  export type ModelCreateNestedOneWithoutRelationshipsFromInput = {
    create?: XOR<ModelCreateWithoutRelationshipsFromInput, ModelUncheckedCreateWithoutRelationshipsFromInput>
    connectOrCreate?: ModelCreateOrConnectWithoutRelationshipsFromInput
    connect?: ModelWhereUniqueInput
  }

  export type ModelCreateNestedOneWithoutRelationshipsToInput = {
    create?: XOR<ModelCreateWithoutRelationshipsToInput, ModelUncheckedCreateWithoutRelationshipsToInput>
    connectOrCreate?: ModelCreateOrConnectWithoutRelationshipsToInput
    connect?: ModelWhereUniqueInput
  }

  export type ModelUpdateOneRequiredWithoutRelationshipsFromNestedInput = {
    create?: XOR<ModelCreateWithoutRelationshipsFromInput, ModelUncheckedCreateWithoutRelationshipsFromInput>
    connectOrCreate?: ModelCreateOrConnectWithoutRelationshipsFromInput
    upsert?: ModelUpsertWithoutRelationshipsFromInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutRelationshipsFromInput, ModelUpdateWithoutRelationshipsFromInput>, ModelUncheckedUpdateWithoutRelationshipsFromInput>
  }

  export type ModelUpdateOneRequiredWithoutRelationshipsToNestedInput = {
    create?: XOR<ModelCreateWithoutRelationshipsToInput, ModelUncheckedCreateWithoutRelationshipsToInput>
    connectOrCreate?: ModelCreateOrConnectWithoutRelationshipsToInput
    upsert?: ModelUpsertWithoutRelationshipsToInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutRelationshipsToInput, ModelUpdateWithoutRelationshipsToInput>, ModelUncheckedUpdateWithoutRelationshipsToInput>
  }

  export type ExecutionCreateNestedManyWithoutTestInput = {
    create?: XOR<ExecutionCreateWithoutTestInput, ExecutionUncheckedCreateWithoutTestInput> | ExecutionCreateWithoutTestInput[] | ExecutionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutTestInput | ExecutionCreateOrConnectWithoutTestInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
  }

  export type ExecutionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<ExecutionCreateWithoutTestInput, ExecutionUncheckedCreateWithoutTestInput> | ExecutionCreateWithoutTestInput[] | ExecutionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutTestInput | ExecutionCreateOrConnectWithoutTestInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
  }

  export type ExecutionUpdateManyWithoutTestNestedInput = {
    create?: XOR<ExecutionCreateWithoutTestInput, ExecutionUncheckedCreateWithoutTestInput> | ExecutionCreateWithoutTestInput[] | ExecutionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutTestInput | ExecutionCreateOrConnectWithoutTestInput[]
    upsert?: ExecutionUpsertWithWhereUniqueWithoutTestInput | ExecutionUpsertWithWhereUniqueWithoutTestInput[]
    set?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    disconnect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    delete?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    update?: ExecutionUpdateWithWhereUniqueWithoutTestInput | ExecutionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ExecutionUpdateManyWithWhereWithoutTestInput | ExecutionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
  }

  export type ExecutionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<ExecutionCreateWithoutTestInput, ExecutionUncheckedCreateWithoutTestInput> | ExecutionCreateWithoutTestInput[] | ExecutionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: ExecutionCreateOrConnectWithoutTestInput | ExecutionCreateOrConnectWithoutTestInput[]
    upsert?: ExecutionUpsertWithWhereUniqueWithoutTestInput | ExecutionUpsertWithWhereUniqueWithoutTestInput[]
    set?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    disconnect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    delete?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    connect?: ExecutionWhereUniqueInput | ExecutionWhereUniqueInput[]
    update?: ExecutionUpdateWithWhereUniqueWithoutTestInput | ExecutionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: ExecutionUpdateManyWithWhereWithoutTestInput | ExecutionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
  }

  export type TestCreateNestedOneWithoutExecutionsInput = {
    create?: XOR<TestCreateWithoutExecutionsInput, TestUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutExecutionsInput
    connect?: TestWhereUniqueInput
  }

  export type TestUpdateOneRequiredWithoutExecutionsNestedInput = {
    create?: XOR<TestCreateWithoutExecutionsInput, TestUncheckedCreateWithoutExecutionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutExecutionsInput
    upsert?: TestUpsertWithoutExecutionsInput
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutExecutionsInput, TestUpdateWithoutExecutionsInput>, TestUncheckedUpdateWithoutExecutionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ConversationCreateWithoutDharmabeingInput = {
    content: string
    user: UserCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutDharmabeingInput = {
    id?: number
    content: string
    userId: number
  }

  export type ConversationCreateOrConnectWithoutDharmabeingInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutDharmabeingInput, ConversationUncheckedCreateWithoutDharmabeingInput>
  }

  export type ConversationUpsertWithWhereUniqueWithoutDharmabeingInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutDharmabeingInput, ConversationUncheckedUpdateWithoutDharmabeingInput>
    create: XOR<ConversationCreateWithoutDharmabeingInput, ConversationUncheckedCreateWithoutDharmabeingInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutDharmabeingInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutDharmabeingInput, ConversationUncheckedUpdateWithoutDharmabeingInput>
  }

  export type ConversationUpdateManyWithWhereWithoutDharmabeingInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutDharmabeingInput>
  }

  export type ConversationScalarWhereInput = {
    AND?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    OR?: ConversationScalarWhereInput[]
    NOT?: ConversationScalarWhereInput | ConversationScalarWhereInput[]
    id?: IntFilter<"Conversation"> | number
    content?: StringFilter<"Conversation"> | string
    userId?: IntFilter<"Conversation"> | number
    dharmabeingId?: IntFilter<"Conversation"> | number
  }

  export type DaoCreateWithoutChildrenInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DaoCreateNestedOneWithoutChildrenInput
    portals?: PortalCreateNestedManyWithoutDaoInput
  }

  export type DaoUncheckedCreateWithoutChildrenInput = {
    id?: number
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    portals?: PortalUncheckedCreateNestedManyWithoutDaoInput
  }

  export type DaoCreateOrConnectWithoutChildrenInput = {
    where: DaoWhereUniqueInput
    create: XOR<DaoCreateWithoutChildrenInput, DaoUncheckedCreateWithoutChildrenInput>
  }

  export type DaoCreateWithoutParentInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DaoCreateNestedManyWithoutParentInput
    portals?: PortalCreateNestedManyWithoutDaoInput
  }

  export type DaoUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DaoUncheckedCreateNestedManyWithoutParentInput
    portals?: PortalUncheckedCreateNestedManyWithoutDaoInput
  }

  export type DaoCreateOrConnectWithoutParentInput = {
    where: DaoWhereUniqueInput
    create: XOR<DaoCreateWithoutParentInput, DaoUncheckedCreateWithoutParentInput>
  }

  export type PortalCreateWithoutDaoInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalUncheckedCreateWithoutDaoInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PortalCreateOrConnectWithoutDaoInput = {
    where: PortalWhereUniqueInput
    create: XOR<PortalCreateWithoutDaoInput, PortalUncheckedCreateWithoutDaoInput>
  }

  export type DaoUpsertWithoutChildrenInput = {
    update: XOR<DaoUpdateWithoutChildrenInput, DaoUncheckedUpdateWithoutChildrenInput>
    create: XOR<DaoCreateWithoutChildrenInput, DaoUncheckedCreateWithoutChildrenInput>
    where?: DaoWhereInput
  }

  export type DaoUpdateToOneWithWhereWithoutChildrenInput = {
    where?: DaoWhereInput
    data: XOR<DaoUpdateWithoutChildrenInput, DaoUncheckedUpdateWithoutChildrenInput>
  }

  export type DaoUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DaoUpdateOneWithoutChildrenNestedInput
    portals?: PortalUpdateManyWithoutDaoNestedInput
  }

  export type DaoUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    portals?: PortalUncheckedUpdateManyWithoutDaoNestedInput
  }

  export type DaoUpsertWithWhereUniqueWithoutParentInput = {
    where: DaoWhereUniqueInput
    update: XOR<DaoUpdateWithoutParentInput, DaoUncheckedUpdateWithoutParentInput>
    create: XOR<DaoCreateWithoutParentInput, DaoUncheckedCreateWithoutParentInput>
  }

  export type DaoUpdateWithWhereUniqueWithoutParentInput = {
    where: DaoWhereUniqueInput
    data: XOR<DaoUpdateWithoutParentInput, DaoUncheckedUpdateWithoutParentInput>
  }

  export type DaoUpdateManyWithWhereWithoutParentInput = {
    where: DaoScalarWhereInput
    data: XOR<DaoUpdateManyMutationInput, DaoUncheckedUpdateManyWithoutParentInput>
  }

  export type DaoScalarWhereInput = {
    AND?: DaoScalarWhereInput | DaoScalarWhereInput[]
    OR?: DaoScalarWhereInput[]
    NOT?: DaoScalarWhereInput | DaoScalarWhereInput[]
    id?: IntFilter<"Dao"> | number
    name?: StringFilter<"Dao"> | string
    description?: StringNullableFilter<"Dao"> | string | null
    energy?: IntFilter<"Dao"> | number
    treasury?: IntFilter<"Dao"> | number
    accounts?: StringNullableFilter<"Dao"> | string | null
    canvas?: StringNullableFilter<"Dao"> | string | null
    createdAt?: DateTimeFilter<"Dao"> | Date | string
    updatedAt?: DateTimeFilter<"Dao"> | Date | string
    parentId?: IntNullableFilter<"Dao"> | number | null
  }

  export type PortalUpsertWithWhereUniqueWithoutDaoInput = {
    where: PortalWhereUniqueInput
    update: XOR<PortalUpdateWithoutDaoInput, PortalUncheckedUpdateWithoutDaoInput>
    create: XOR<PortalCreateWithoutDaoInput, PortalUncheckedCreateWithoutDaoInput>
  }

  export type PortalUpdateWithWhereUniqueWithoutDaoInput = {
    where: PortalWhereUniqueInput
    data: XOR<PortalUpdateWithoutDaoInput, PortalUncheckedUpdateWithoutDaoInput>
  }

  export type PortalUpdateManyWithWhereWithoutDaoInput = {
    where: PortalScalarWhereInput
    data: XOR<PortalUpdateManyMutationInput, PortalUncheckedUpdateManyWithoutDaoInput>
  }

  export type PortalScalarWhereInput = {
    AND?: PortalScalarWhereInput | PortalScalarWhereInput[]
    OR?: PortalScalarWhereInput[]
    NOT?: PortalScalarWhereInput | PortalScalarWhereInput[]
    id?: IntFilter<"Portal"> | number
    daoId?: IntFilter<"Portal"> | number
    createdAt?: DateTimeFilter<"Portal"> | Date | string
    updatedAt?: DateTimeFilter<"Portal"> | Date | string
  }

  export type DaoCreateWithoutPortalsInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DaoCreateNestedOneWithoutChildrenInput
    children?: DaoCreateNestedManyWithoutParentInput
  }

  export type DaoUncheckedCreateWithoutPortalsInput = {
    id?: number
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parentId?: number | null
    children?: DaoUncheckedCreateNestedManyWithoutParentInput
  }

  export type DaoCreateOrConnectWithoutPortalsInput = {
    where: DaoWhereUniqueInput
    create: XOR<DaoCreateWithoutPortalsInput, DaoUncheckedCreateWithoutPortalsInput>
  }

  export type DaoUpsertWithoutPortalsInput = {
    update: XOR<DaoUpdateWithoutPortalsInput, DaoUncheckedUpdateWithoutPortalsInput>
    create: XOR<DaoCreateWithoutPortalsInput, DaoUncheckedCreateWithoutPortalsInput>
    where?: DaoWhereInput
  }

  export type DaoUpdateToOneWithWhereWithoutPortalsInput = {
    where?: DaoWhereInput
    data: XOR<DaoUpdateWithoutPortalsInput, DaoUncheckedUpdateWithoutPortalsInput>
  }

  export type DaoUpdateWithoutPortalsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DaoUpdateOneWithoutChildrenNestedInput
    children?: DaoUpdateManyWithoutParentNestedInput
  }

  export type DaoUncheckedUpdateWithoutPortalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    children?: DaoUncheckedUpdateManyWithoutParentNestedInput
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    permissions?: PermissionCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    permissions?: PermissionUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type SessionCreateWithoutUserInput = {
    expiresAt: Date | string
    hashedSessionToken: string
    antiCSRFToken: string
    publicData?: string | null
    privateData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: number
    expiresAt: Date | string
    hashedSessionToken: string
    antiCSRFToken: string
    publicData?: string | null
    privateData?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type UserMemoryCreateWithoutUserInput = {
    content: string
  }

  export type UserMemoryUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
  }

  export type UserMemoryCreateOrConnectWithoutUserInput = {
    where: UserMemoryWhereUniqueInput
    create: XOR<UserMemoryCreateWithoutUserInput, UserMemoryUncheckedCreateWithoutUserInput>
  }

  export type ConversationCreateWithoutUserInput = {
    content: string
    dharmabeing: DharmabeingCreateNestedOneWithoutConversationsInput
  }

  export type ConversationUncheckedCreateWithoutUserInput = {
    id?: number
    content: string
    dharmabeingId: number
  }

  export type ConversationCreateOrConnectWithoutUserInput = {
    where: ConversationWhereUniqueInput
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    hashedSessionToken?: StringFilter<"Session"> | string
    antiCSRFToken?: StringFilter<"Session"> | string
    publicData?: StringNullableFilter<"Session"> | string | null
    privateData?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    userId?: IntFilter<"Session"> | number
  }

  export type UserMemoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserMemoryWhereUniqueInput
    update: XOR<UserMemoryUpdateWithoutUserInput, UserMemoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserMemoryCreateWithoutUserInput, UserMemoryUncheckedCreateWithoutUserInput>
  }

  export type UserMemoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserMemoryWhereUniqueInput
    data: XOR<UserMemoryUpdateWithoutUserInput, UserMemoryUncheckedUpdateWithoutUserInput>
  }

  export type UserMemoryUpdateManyWithWhereWithoutUserInput = {
    where: UserMemoryScalarWhereInput
    data: XOR<UserMemoryUpdateManyMutationInput, UserMemoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserMemoryScalarWhereInput = {
    AND?: UserMemoryScalarWhereInput | UserMemoryScalarWhereInput[]
    OR?: UserMemoryScalarWhereInput[]
    NOT?: UserMemoryScalarWhereInput | UserMemoryScalarWhereInput[]
    id?: IntFilter<"UserMemory"> | number
    content?: StringFilter<"UserMemory"> | string
    userId?: IntFilter<"UserMemory"> | number
  }

  export type ConversationUpsertWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    update: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
    create: XOR<ConversationCreateWithoutUserInput, ConversationUncheckedCreateWithoutUserInput>
  }

  export type ConversationUpdateWithWhereUniqueWithoutUserInput = {
    where: ConversationWhereUniqueInput
    data: XOR<ConversationUpdateWithoutUserInput, ConversationUncheckedUpdateWithoutUserInput>
  }

  export type ConversationUpdateManyWithWhereWithoutUserInput = {
    where: ConversationScalarWhereInput
    data: XOR<ConversationUpdateManyMutationInput, ConversationUncheckedUpdateManyWithoutUserInput>
  }

  export type PermissionCreateWithoutRolesInput = {
    name: string
    actions?: DharmaActionCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    name: string
    actions?: DharmaActionUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateWithoutRolesInput = {
    email: string
    hashedPassword?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    memories?: UserMemoryCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memories?: UserMemoryUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateManyWithWhereWithoutRolesInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutRolesInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    id?: IntFilter<"Permission"> | number
    name?: StringFilter<"Permission"> | string
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
  }

  export type RoleCreateWithoutPermissionsInput = {
    name: string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type DharmaActionCreateWithoutPermissionsInput = {
    name: string
  }

  export type DharmaActionUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
  }

  export type DharmaActionCreateOrConnectWithoutPermissionsInput = {
    where: DharmaActionWhereUniqueInput
    create: XOR<DharmaActionCreateWithoutPermissionsInput, DharmaActionUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateManyWithWhereWithoutPermissionsInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type DharmaActionUpsertWithWhereUniqueWithoutPermissionsInput = {
    where: DharmaActionWhereUniqueInput
    update: XOR<DharmaActionUpdateWithoutPermissionsInput, DharmaActionUncheckedUpdateWithoutPermissionsInput>
    create: XOR<DharmaActionCreateWithoutPermissionsInput, DharmaActionUncheckedCreateWithoutPermissionsInput>
  }

  export type DharmaActionUpdateWithWhereUniqueWithoutPermissionsInput = {
    where: DharmaActionWhereUniqueInput
    data: XOR<DharmaActionUpdateWithoutPermissionsInput, DharmaActionUncheckedUpdateWithoutPermissionsInput>
  }

  export type DharmaActionUpdateManyWithWhereWithoutPermissionsInput = {
    where: DharmaActionScalarWhereInput
    data: XOR<DharmaActionUpdateManyMutationInput, DharmaActionUncheckedUpdateManyWithoutPermissionsInput>
  }

  export type DharmaActionScalarWhereInput = {
    AND?: DharmaActionScalarWhereInput | DharmaActionScalarWhereInput[]
    OR?: DharmaActionScalarWhereInput[]
    NOT?: DharmaActionScalarWhereInput | DharmaActionScalarWhereInput[]
    id?: IntFilter<"DharmaAction"> | number
    name?: StringFilter<"DharmaAction"> | string
  }

  export type PermissionCreateWithoutActionsInput = {
    name: string
    roles?: RoleCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutActionsInput = {
    id?: number
    name: string
    roles?: RoleUncheckedCreateNestedManyWithoutPermissionsInput
  }

  export type PermissionCreateOrConnectWithoutActionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutActionsInput, PermissionUncheckedCreateWithoutActionsInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutActionsInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutActionsInput, PermissionUncheckedUpdateWithoutActionsInput>
    create: XOR<PermissionCreateWithoutActionsInput, PermissionUncheckedCreateWithoutActionsInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutActionsInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutActionsInput, PermissionUncheckedUpdateWithoutActionsInput>
  }

  export type PermissionUpdateManyWithWhereWithoutActionsInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutActionsInput>
  }

  export type UserCreateWithoutConversationsInput = {
    email: string
    hashedPassword?: string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    memories?: UserMemoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConversationsInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memories?: UserMemoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConversationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
  }

  export type DharmabeingCreateWithoutConversationsInput = {
    name: string
    type: string
    attributes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions: string
  }

  export type DharmabeingUncheckedCreateWithoutConversationsInput = {
    id?: number
    name: string
    type: string
    attributes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions: string
  }

  export type DharmabeingCreateOrConnectWithoutConversationsInput = {
    where: DharmabeingWhereUniqueInput
    create: XOR<DharmabeingCreateWithoutConversationsInput, DharmabeingUncheckedCreateWithoutConversationsInput>
  }

  export type UserUpsertWithoutConversationsInput = {
    update: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
    create: XOR<UserCreateWithoutConversationsInput, UserUncheckedCreateWithoutConversationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConversationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConversationsInput, UserUncheckedUpdateWithoutConversationsInput>
  }

  export type UserUpdateWithoutConversationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DharmabeingUpsertWithoutConversationsInput = {
    update: XOR<DharmabeingUpdateWithoutConversationsInput, DharmabeingUncheckedUpdateWithoutConversationsInput>
    create: XOR<DharmabeingCreateWithoutConversationsInput, DharmabeingUncheckedCreateWithoutConversationsInput>
    where?: DharmabeingWhereInput
  }

  export type DharmabeingUpdateToOneWithWhereWithoutConversationsInput = {
    where?: DharmabeingWhereInput
    data: XOR<DharmabeingUpdateWithoutConversationsInput, DharmabeingUncheckedUpdateWithoutConversationsInput>
  }

  export type DharmabeingUpdateWithoutConversationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DharmabeingUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutMemoriesInput = {
    email: string
    hashedPassword?: string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemoriesInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMemoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
  }

  export type UserUpsertWithoutMemoriesInput = {
    update: XOR<UserUpdateWithoutMemoriesInput, UserUncheckedUpdateWithoutMemoriesInput>
    create: XOR<UserCreateWithoutMemoriesInput, UserUncheckedCreateWithoutMemoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMemoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMemoriesInput, UserUncheckedUpdateWithoutMemoriesInput>
  }

  export type UserUpdateWithoutMemoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    hashedPassword?: string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
    memories?: UserMemoryCreateNestedManyWithoutUserInput
    conversations?: ConversationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    memories?: UserMemoryUncheckedCreateNestedManyWithoutUserInput
    conversations?: ConversationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
    memories?: UserMemoryUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    memories?: UserMemoryUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ModelCreateWithoutTableInput = {
    name: string
    description: string
    attributes?: AttributeCreateNestedManyWithoutModelInput
    relationshipsFrom?: RelationshipCreateNestedManyWithoutModelFromInput
    relationshipsTo?: RelationshipCreateNestedManyWithoutModelToInput
  }

  export type ModelUncheckedCreateWithoutTableInput = {
    id?: number
    name: string
    description: string
    attributes?: AttributeUncheckedCreateNestedManyWithoutModelInput
    relationshipsFrom?: RelationshipUncheckedCreateNestedManyWithoutModelFromInput
    relationshipsTo?: RelationshipUncheckedCreateNestedManyWithoutModelToInput
  }

  export type ModelCreateOrConnectWithoutTableInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutTableInput, ModelUncheckedCreateWithoutTableInput>
  }

  export type ModelUpsertWithWhereUniqueWithoutTableInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutTableInput, ModelUncheckedUpdateWithoutTableInput>
    create: XOR<ModelCreateWithoutTableInput, ModelUncheckedCreateWithoutTableInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutTableInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutTableInput, ModelUncheckedUpdateWithoutTableInput>
  }

  export type ModelUpdateManyWithWhereWithoutTableInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutTableInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: IntFilter<"Model"> | number
    name?: StringFilter<"Model"> | string
    description?: StringFilter<"Model"> | string
    databaseId?: IntFilter<"Model"> | number
  }

  export type AttributeCreateWithoutModelInput = {
    name: string
    dataType: string
    constraints?: string | null
    isPrimaryKey?: boolean
    foreignKeyTo?: string | null
  }

  export type AttributeUncheckedCreateWithoutModelInput = {
    id?: number
    name: string
    dataType: string
    constraints?: string | null
    isPrimaryKey?: boolean
    foreignKeyTo?: string | null
  }

  export type AttributeCreateOrConnectWithoutModelInput = {
    where: AttributeWhereUniqueInput
    create: XOR<AttributeCreateWithoutModelInput, AttributeUncheckedCreateWithoutModelInput>
  }

  export type DatabaseCreateWithoutModelsInput = {
    name: string
  }

  export type DatabaseUncheckedCreateWithoutModelsInput = {
    id?: number
    name: string
  }

  export type DatabaseCreateOrConnectWithoutModelsInput = {
    where: DatabaseWhereUniqueInput
    create: XOR<DatabaseCreateWithoutModelsInput, DatabaseUncheckedCreateWithoutModelsInput>
  }

  export type RelationshipCreateWithoutModelFromInput = {
    type: string
    onDelete?: string | null
    onUpdate?: string | null
    modelTo: ModelCreateNestedOneWithoutRelationshipsToInput
  }

  export type RelationshipUncheckedCreateWithoutModelFromInput = {
    id?: number
    modelIdTo: number
    type: string
    onDelete?: string | null
    onUpdate?: string | null
  }

  export type RelationshipCreateOrConnectWithoutModelFromInput = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutModelFromInput, RelationshipUncheckedCreateWithoutModelFromInput>
  }

  export type RelationshipCreateWithoutModelToInput = {
    type: string
    onDelete?: string | null
    onUpdate?: string | null
    modelFrom: ModelCreateNestedOneWithoutRelationshipsFromInput
  }

  export type RelationshipUncheckedCreateWithoutModelToInput = {
    id?: number
    modelIdFrom: number
    type: string
    onDelete?: string | null
    onUpdate?: string | null
  }

  export type RelationshipCreateOrConnectWithoutModelToInput = {
    where: RelationshipWhereUniqueInput
    create: XOR<RelationshipCreateWithoutModelToInput, RelationshipUncheckedCreateWithoutModelToInput>
  }

  export type AttributeUpsertWithWhereUniqueWithoutModelInput = {
    where: AttributeWhereUniqueInput
    update: XOR<AttributeUpdateWithoutModelInput, AttributeUncheckedUpdateWithoutModelInput>
    create: XOR<AttributeCreateWithoutModelInput, AttributeUncheckedCreateWithoutModelInput>
  }

  export type AttributeUpdateWithWhereUniqueWithoutModelInput = {
    where: AttributeWhereUniqueInput
    data: XOR<AttributeUpdateWithoutModelInput, AttributeUncheckedUpdateWithoutModelInput>
  }

  export type AttributeUpdateManyWithWhereWithoutModelInput = {
    where: AttributeScalarWhereInput
    data: XOR<AttributeUpdateManyMutationInput, AttributeUncheckedUpdateManyWithoutModelInput>
  }

  export type AttributeScalarWhereInput = {
    AND?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    OR?: AttributeScalarWhereInput[]
    NOT?: AttributeScalarWhereInput | AttributeScalarWhereInput[]
    id?: IntFilter<"Attribute"> | number
    name?: StringFilter<"Attribute"> | string
    dataType?: StringFilter<"Attribute"> | string
    constraints?: StringNullableFilter<"Attribute"> | string | null
    isPrimaryKey?: BoolFilter<"Attribute"> | boolean
    foreignKeyTo?: StringNullableFilter<"Attribute"> | string | null
    modelId?: IntFilter<"Attribute"> | number
  }

  export type DatabaseUpsertWithoutModelsInput = {
    update: XOR<DatabaseUpdateWithoutModelsInput, DatabaseUncheckedUpdateWithoutModelsInput>
    create: XOR<DatabaseCreateWithoutModelsInput, DatabaseUncheckedCreateWithoutModelsInput>
    where?: DatabaseWhereInput
  }

  export type DatabaseUpdateToOneWithWhereWithoutModelsInput = {
    where?: DatabaseWhereInput
    data: XOR<DatabaseUpdateWithoutModelsInput, DatabaseUncheckedUpdateWithoutModelsInput>
  }

  export type DatabaseUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DatabaseUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RelationshipUpsertWithWhereUniqueWithoutModelFromInput = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutModelFromInput, RelationshipUncheckedUpdateWithoutModelFromInput>
    create: XOR<RelationshipCreateWithoutModelFromInput, RelationshipUncheckedCreateWithoutModelFromInput>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutModelFromInput = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutModelFromInput, RelationshipUncheckedUpdateWithoutModelFromInput>
  }

  export type RelationshipUpdateManyWithWhereWithoutModelFromInput = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutModelFromInput>
  }

  export type RelationshipScalarWhereInput = {
    AND?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    OR?: RelationshipScalarWhereInput[]
    NOT?: RelationshipScalarWhereInput | RelationshipScalarWhereInput[]
    id?: IntFilter<"Relationship"> | number
    modelIdFrom?: IntFilter<"Relationship"> | number
    modelIdTo?: IntFilter<"Relationship"> | number
    type?: StringFilter<"Relationship"> | string
    onDelete?: StringNullableFilter<"Relationship"> | string | null
    onUpdate?: StringNullableFilter<"Relationship"> | string | null
  }

  export type RelationshipUpsertWithWhereUniqueWithoutModelToInput = {
    where: RelationshipWhereUniqueInput
    update: XOR<RelationshipUpdateWithoutModelToInput, RelationshipUncheckedUpdateWithoutModelToInput>
    create: XOR<RelationshipCreateWithoutModelToInput, RelationshipUncheckedCreateWithoutModelToInput>
  }

  export type RelationshipUpdateWithWhereUniqueWithoutModelToInput = {
    where: RelationshipWhereUniqueInput
    data: XOR<RelationshipUpdateWithoutModelToInput, RelationshipUncheckedUpdateWithoutModelToInput>
  }

  export type RelationshipUpdateManyWithWhereWithoutModelToInput = {
    where: RelationshipScalarWhereInput
    data: XOR<RelationshipUpdateManyMutationInput, RelationshipUncheckedUpdateManyWithoutModelToInput>
  }

  export type ModelCreateWithoutAttributesInput = {
    name: string
    description: string
    table: DatabaseCreateNestedOneWithoutModelsInput
    relationshipsFrom?: RelationshipCreateNestedManyWithoutModelFromInput
    relationshipsTo?: RelationshipCreateNestedManyWithoutModelToInput
  }

  export type ModelUncheckedCreateWithoutAttributesInput = {
    id?: number
    name: string
    description: string
    databaseId: number
    relationshipsFrom?: RelationshipUncheckedCreateNestedManyWithoutModelFromInput
    relationshipsTo?: RelationshipUncheckedCreateNestedManyWithoutModelToInput
  }

  export type ModelCreateOrConnectWithoutAttributesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutAttributesInput, ModelUncheckedCreateWithoutAttributesInput>
  }

  export type ModelUpsertWithoutAttributesInput = {
    update: XOR<ModelUpdateWithoutAttributesInput, ModelUncheckedUpdateWithoutAttributesInput>
    create: XOR<ModelCreateWithoutAttributesInput, ModelUncheckedCreateWithoutAttributesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutAttributesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutAttributesInput, ModelUncheckedUpdateWithoutAttributesInput>
  }

  export type ModelUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    table?: DatabaseUpdateOneRequiredWithoutModelsNestedInput
    relationshipsFrom?: RelationshipUpdateManyWithoutModelFromNestedInput
    relationshipsTo?: RelationshipUpdateManyWithoutModelToNestedInput
  }

  export type ModelUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    databaseId?: IntFieldUpdateOperationsInput | number
    relationshipsFrom?: RelationshipUncheckedUpdateManyWithoutModelFromNestedInput
    relationshipsTo?: RelationshipUncheckedUpdateManyWithoutModelToNestedInput
  }

  export type ModelCreateWithoutRelationshipsFromInput = {
    name: string
    description: string
    attributes?: AttributeCreateNestedManyWithoutModelInput
    table: DatabaseCreateNestedOneWithoutModelsInput
    relationshipsTo?: RelationshipCreateNestedManyWithoutModelToInput
  }

  export type ModelUncheckedCreateWithoutRelationshipsFromInput = {
    id?: number
    name: string
    description: string
    databaseId: number
    attributes?: AttributeUncheckedCreateNestedManyWithoutModelInput
    relationshipsTo?: RelationshipUncheckedCreateNestedManyWithoutModelToInput
  }

  export type ModelCreateOrConnectWithoutRelationshipsFromInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutRelationshipsFromInput, ModelUncheckedCreateWithoutRelationshipsFromInput>
  }

  export type ModelCreateWithoutRelationshipsToInput = {
    name: string
    description: string
    attributes?: AttributeCreateNestedManyWithoutModelInput
    table: DatabaseCreateNestedOneWithoutModelsInput
    relationshipsFrom?: RelationshipCreateNestedManyWithoutModelFromInput
  }

  export type ModelUncheckedCreateWithoutRelationshipsToInput = {
    id?: number
    name: string
    description: string
    databaseId: number
    attributes?: AttributeUncheckedCreateNestedManyWithoutModelInput
    relationshipsFrom?: RelationshipUncheckedCreateNestedManyWithoutModelFromInput
  }

  export type ModelCreateOrConnectWithoutRelationshipsToInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutRelationshipsToInput, ModelUncheckedCreateWithoutRelationshipsToInput>
  }

  export type ModelUpsertWithoutRelationshipsFromInput = {
    update: XOR<ModelUpdateWithoutRelationshipsFromInput, ModelUncheckedUpdateWithoutRelationshipsFromInput>
    create: XOR<ModelCreateWithoutRelationshipsFromInput, ModelUncheckedCreateWithoutRelationshipsFromInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutRelationshipsFromInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutRelationshipsFromInput, ModelUncheckedUpdateWithoutRelationshipsFromInput>
  }

  export type ModelUpdateWithoutRelationshipsFromInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUpdateManyWithoutModelNestedInput
    table?: DatabaseUpdateOneRequiredWithoutModelsNestedInput
    relationshipsTo?: RelationshipUpdateManyWithoutModelToNestedInput
  }

  export type ModelUncheckedUpdateWithoutRelationshipsFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    databaseId?: IntFieldUpdateOperationsInput | number
    attributes?: AttributeUncheckedUpdateManyWithoutModelNestedInput
    relationshipsTo?: RelationshipUncheckedUpdateManyWithoutModelToNestedInput
  }

  export type ModelUpsertWithoutRelationshipsToInput = {
    update: XOR<ModelUpdateWithoutRelationshipsToInput, ModelUncheckedUpdateWithoutRelationshipsToInput>
    create: XOR<ModelCreateWithoutRelationshipsToInput, ModelUncheckedCreateWithoutRelationshipsToInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutRelationshipsToInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutRelationshipsToInput, ModelUncheckedUpdateWithoutRelationshipsToInput>
  }

  export type ModelUpdateWithoutRelationshipsToInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUpdateManyWithoutModelNestedInput
    table?: DatabaseUpdateOneRequiredWithoutModelsNestedInput
    relationshipsFrom?: RelationshipUpdateManyWithoutModelFromNestedInput
  }

  export type ModelUncheckedUpdateWithoutRelationshipsToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    databaseId?: IntFieldUpdateOperationsInput | number
    attributes?: AttributeUncheckedUpdateManyWithoutModelNestedInput
    relationshipsFrom?: RelationshipUncheckedUpdateManyWithoutModelFromNestedInput
  }

  export type ExecutionCreateWithoutTestInput = {
    status: string
    output?: string | null
    createdAt?: Date | string
  }

  export type ExecutionUncheckedCreateWithoutTestInput = {
    id?: number
    status: string
    output?: string | null
    createdAt?: Date | string
  }

  export type ExecutionCreateOrConnectWithoutTestInput = {
    where: ExecutionWhereUniqueInput
    create: XOR<ExecutionCreateWithoutTestInput, ExecutionUncheckedCreateWithoutTestInput>
  }

  export type ExecutionUpsertWithWhereUniqueWithoutTestInput = {
    where: ExecutionWhereUniqueInput
    update: XOR<ExecutionUpdateWithoutTestInput, ExecutionUncheckedUpdateWithoutTestInput>
    create: XOR<ExecutionCreateWithoutTestInput, ExecutionUncheckedCreateWithoutTestInput>
  }

  export type ExecutionUpdateWithWhereUniqueWithoutTestInput = {
    where: ExecutionWhereUniqueInput
    data: XOR<ExecutionUpdateWithoutTestInput, ExecutionUncheckedUpdateWithoutTestInput>
  }

  export type ExecutionUpdateManyWithWhereWithoutTestInput = {
    where: ExecutionScalarWhereInput
    data: XOR<ExecutionUpdateManyMutationInput, ExecutionUncheckedUpdateManyWithoutTestInput>
  }

  export type ExecutionScalarWhereInput = {
    AND?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
    OR?: ExecutionScalarWhereInput[]
    NOT?: ExecutionScalarWhereInput | ExecutionScalarWhereInput[]
    id?: IntFilter<"Execution"> | number
    testId?: IntFilter<"Execution"> | number
    status?: StringFilter<"Execution"> | string
    output?: StringNullableFilter<"Execution"> | string | null
    createdAt?: DateTimeFilter<"Execution"> | Date | string
  }

  export type TestCreateWithoutExecutionsInput = {
    testName: string
    description: string
    testType: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUncheckedCreateWithoutExecutionsInput = {
    id?: number
    testName: string
    description: string
    testType: string
    filePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCreateOrConnectWithoutExecutionsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutExecutionsInput, TestUncheckedCreateWithoutExecutionsInput>
  }

  export type TestUpsertWithoutExecutionsInput = {
    update: XOR<TestUpdateWithoutExecutionsInput, TestUncheckedUpdateWithoutExecutionsInput>
    create: XOR<TestCreateWithoutExecutionsInput, TestUncheckedCreateWithoutExecutionsInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutExecutionsInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutExecutionsInput, TestUncheckedUpdateWithoutExecutionsInput>
  }

  export type TestUpdateWithoutExecutionsInput = {
    testName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateWithoutExecutionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    testName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    testType?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConversationUpdateWithoutDharmabeingInput = {
    content?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutDharmabeingInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationUncheckedUpdateManyWithoutDharmabeingInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DaoUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DaoUpdateManyWithoutParentNestedInput
    portals?: PortalUpdateManyWithoutDaoNestedInput
  }

  export type DaoUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DaoUncheckedUpdateManyWithoutParentNestedInput
    portals?: PortalUncheckedUpdateManyWithoutDaoNestedInput
  }

  export type DaoUncheckedUpdateManyWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUpdateWithoutDaoInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUncheckedUpdateWithoutDaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortalUncheckedUpdateManyWithoutDaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    permissions?: PermissionUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SessionUpdateWithoutUserInput = {
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hashedSessionToken?: StringFieldUpdateOperationsInput | string
    antiCSRFToken?: StringFieldUpdateOperationsInput | string
    publicData?: NullableStringFieldUpdateOperationsInput | string | null
    privateData?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMemoryUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserMemoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type UserMemoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
  }

  export type ConversationUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    dharmabeing?: DharmabeingUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type ConversationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    dharmabeingId?: IntFieldUpdateOperationsInput | number
  }

  export type ConversationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    dharmabeingId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUpdateWithoutRolesInput = {
    name?: StringFieldUpdateOperationsInput | string
    actions?: DharmaActionUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    actions?: DharmaActionUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutRolesInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUpdateManyWithoutUserNestedInput
    conversations?: ConversationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUncheckedUpdateManyWithoutUserNestedInput
    conversations?: ConversationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaActionUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaActionUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaActionUncheckedUpdateManyWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUpdateWithoutActionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    roles?: RoleUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    roles?: RoleUncheckedUpdateManyWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateManyWithoutActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUpdateWithoutTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUpdateManyWithoutModelNestedInput
    relationshipsFrom?: RelationshipUpdateManyWithoutModelFromNestedInput
    relationshipsTo?: RelationshipUpdateManyWithoutModelToNestedInput
  }

  export type ModelUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    attributes?: AttributeUncheckedUpdateManyWithoutModelNestedInput
    relationshipsFrom?: RelationshipUncheckedUpdateManyWithoutModelFromNestedInput
    relationshipsTo?: RelationshipUncheckedUpdateManyWithoutModelToNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AttributeUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AttributeUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataType?: StringFieldUpdateOperationsInput | string
    constraints?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimaryKey?: BoolFieldUpdateOperationsInput | boolean
    foreignKeyTo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutModelFromInput = {
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
    modelTo?: ModelUpdateOneRequiredWithoutRelationshipsToNestedInput
  }

  export type RelationshipUncheckedUpdateWithoutModelFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelIdTo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutModelFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelIdTo?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUpdateWithoutModelToInput = {
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
    modelFrom?: ModelUpdateOneRequiredWithoutRelationshipsFromNestedInput
  }

  export type RelationshipUncheckedUpdateWithoutModelToInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelIdFrom?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RelationshipUncheckedUpdateManyWithoutModelToInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelIdFrom?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    onDelete?: NullableStringFieldUpdateOperationsInput | string | null
    onUpdate?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExecutionUpdateWithoutTestInput = {
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUncheckedUpdateWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionUncheckedUpdateManyWithoutTestInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    output?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DharmabeingCountOutputTypeDefaultArgs instead
     */
    export type DharmabeingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DharmabeingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DaoCountOutputTypeDefaultArgs instead
     */
    export type DaoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DaoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionCountOutputTypeDefaultArgs instead
     */
    export type PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DharmaActionCountOutputTypeDefaultArgs instead
     */
    export type DharmaActionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DharmaActionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DatabaseCountOutputTypeDefaultArgs instead
     */
    export type DatabaseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DatabaseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelCountOutputTypeDefaultArgs instead
     */
    export type ModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestCountOutputTypeDefaultArgs instead
     */
    export type TestCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DharmabeingDefaultArgs instead
     */
    export type DharmabeingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DharmabeingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DaoDefaultArgs instead
     */
    export type DaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DaoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PortalDefaultArgs instead
     */
    export type PortalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PortalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PermissionDefaultArgs instead
     */
    export type PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DharmaActionDefaultArgs instead
     */
    export type DharmaActionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DharmaActionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ConversationDefaultArgs instead
     */
    export type ConversationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConversationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserMemoryDefaultArgs instead
     */
    export type UserMemoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserMemoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DatabaseDefaultArgs instead
     */
    export type DatabaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DatabaseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelDefaultArgs instead
     */
    export type ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AttributeDefaultArgs instead
     */
    export type AttributeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AttributeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RelationshipDefaultArgs instead
     */
    export type RelationshipArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RelationshipDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FileDefaultArgs instead
     */
    export type FileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TestDefaultArgs instead
     */
    export type TestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TestDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExecutionDefaultArgs instead
     */
    export type ExecutionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExecutionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}