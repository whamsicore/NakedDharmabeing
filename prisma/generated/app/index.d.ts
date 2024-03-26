
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
 * Model DharmaBeings
 * 
 */
export type DharmaBeings = $Result.DefaultSelection<Prisma.$DharmaBeingsPayload>
/**
 * Model DAOs
 * 
 */
export type DAOs = $Result.DefaultSelection<Prisma.$DAOsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
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
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DharmaBeings
 * const dharmaBeings = await prisma.dharmaBeings.findMany()
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
   * // Fetch zero or more DharmaBeings
   * const dharmaBeings = await prisma.dharmaBeings.findMany()
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
   * `prisma.dharmaBeings`: Exposes CRUD operations for the **DharmaBeings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DharmaBeings
    * const dharmaBeings = await prisma.dharmaBeings.findMany()
    * ```
    */
  get dharmaBeings(): Prisma.DharmaBeingsDelegate<ExtArgs>;

  /**
   * `prisma.dAOs`: Exposes CRUD operations for the **DAOs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DAOs
    * const dAOs = await prisma.dAOs.findMany()
    * ```
    */
  get dAOs(): Prisma.DAOsDelegate<ExtArgs>;

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
    DharmaBeings: 'DharmaBeings',
    DAOs: 'DAOs',
    User: 'User',
    UserMemory: 'UserMemory',
    Session: 'Session'
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
      modelProps: 'dharmaBeings' | 'dAOs' | 'user' | 'userMemory' | 'session'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      DharmaBeings: {
        payload: Prisma.$DharmaBeingsPayload<ExtArgs>
        fields: Prisma.DharmaBeingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DharmaBeingsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DharmaBeingsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>
          }
          findFirst: {
            args: Prisma.DharmaBeingsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DharmaBeingsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>
          }
          findMany: {
            args: Prisma.DharmaBeingsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>[]
          }
          create: {
            args: Prisma.DharmaBeingsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>
          }
          delete: {
            args: Prisma.DharmaBeingsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>
          }
          update: {
            args: Prisma.DharmaBeingsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>
          }
          deleteMany: {
            args: Prisma.DharmaBeingsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DharmaBeingsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DharmaBeingsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DharmaBeingsPayload>
          }
          aggregate: {
            args: Prisma.DharmaBeingsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDharmaBeings>
          }
          groupBy: {
            args: Prisma.DharmaBeingsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DharmaBeingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DharmaBeingsCountArgs<ExtArgs>,
            result: $Utils.Optional<DharmaBeingsCountAggregateOutputType> | number
          }
        }
      }
      DAOs: {
        payload: Prisma.$DAOsPayload<ExtArgs>
        fields: Prisma.DAOsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DAOsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DAOsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>
          }
          findFirst: {
            args: Prisma.DAOsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DAOsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>
          }
          findMany: {
            args: Prisma.DAOsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>[]
          }
          create: {
            args: Prisma.DAOsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>
          }
          delete: {
            args: Prisma.DAOsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>
          }
          update: {
            args: Prisma.DAOsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>
          }
          deleteMany: {
            args: Prisma.DAOsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DAOsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DAOsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DAOsPayload>
          }
          aggregate: {
            args: Prisma.DAOsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDAOs>
          }
          groupBy: {
            args: Prisma.DAOsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DAOsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DAOsCountArgs<ExtArgs>,
            result: $Utils.Optional<DAOsCountAggregateOutputType> | number
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
   * Count Type DAOsCountOutputType
   */

  export type DAOsCountOutputType = {
    children: number
  }

  export type DAOsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | DAOsCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes

  /**
   * DAOsCountOutputType without action
   */
  export type DAOsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOsCountOutputType
     */
    select?: DAOsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DAOsCountOutputType without action
   */
  export type DAOsCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DAOsWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    memories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    memories?: boolean | UserCountOutputTypeCountMemoriesArgs
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
   * Models
   */

  /**
   * Model DharmaBeings
   */

  export type AggregateDharmaBeings = {
    _count: DharmaBeingsCountAggregateOutputType | null
    _avg: DharmaBeingsAvgAggregateOutputType | null
    _sum: DharmaBeingsSumAggregateOutputType | null
    _min: DharmaBeingsMinAggregateOutputType | null
    _max: DharmaBeingsMaxAggregateOutputType | null
  }

  export type DharmaBeingsAvgAggregateOutputType = {
    id: number | null
  }

  export type DharmaBeingsSumAggregateOutputType = {
    id: number | null
  }

  export type DharmaBeingsMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    attributes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    permissions: string | null
  }

  export type DharmaBeingsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    attributes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    permissions: string | null
  }

  export type DharmaBeingsCountAggregateOutputType = {
    id: number
    name: number
    type: number
    attributes: number
    createdAt: number
    updatedAt: number
    permissions: number
    _all: number
  }


  export type DharmaBeingsAvgAggregateInputType = {
    id?: true
  }

  export type DharmaBeingsSumAggregateInputType = {
    id?: true
  }

  export type DharmaBeingsMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    permissions?: true
  }

  export type DharmaBeingsMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    permissions?: true
  }

  export type DharmaBeingsCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    attributes?: true
    createdAt?: true
    updatedAt?: true
    permissions?: true
    _all?: true
  }

  export type DharmaBeingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DharmaBeings to aggregate.
     */
    where?: DharmaBeingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaBeings to fetch.
     */
    orderBy?: DharmaBeingsOrderByWithRelationInput | DharmaBeingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DharmaBeingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaBeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaBeings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DharmaBeings
    **/
    _count?: true | DharmaBeingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DharmaBeingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DharmaBeingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DharmaBeingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DharmaBeingsMaxAggregateInputType
  }

  export type GetDharmaBeingsAggregateType<T extends DharmaBeingsAggregateArgs> = {
        [P in keyof T & keyof AggregateDharmaBeings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDharmaBeings[P]>
      : GetScalarType<T[P], AggregateDharmaBeings[P]>
  }




  export type DharmaBeingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DharmaBeingsWhereInput
    orderBy?: DharmaBeingsOrderByWithAggregationInput | DharmaBeingsOrderByWithAggregationInput[]
    by: DharmaBeingsScalarFieldEnum[] | DharmaBeingsScalarFieldEnum
    having?: DharmaBeingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DharmaBeingsCountAggregateInputType | true
    _avg?: DharmaBeingsAvgAggregateInputType
    _sum?: DharmaBeingsSumAggregateInputType
    _min?: DharmaBeingsMinAggregateInputType
    _max?: DharmaBeingsMaxAggregateInputType
  }

  export type DharmaBeingsGroupByOutputType = {
    id: number
    name: string
    type: string
    attributes: string | null
    createdAt: Date
    updatedAt: Date
    permissions: string
    _count: DharmaBeingsCountAggregateOutputType | null
    _avg: DharmaBeingsAvgAggregateOutputType | null
    _sum: DharmaBeingsSumAggregateOutputType | null
    _min: DharmaBeingsMinAggregateOutputType | null
    _max: DharmaBeingsMaxAggregateOutputType | null
  }

  type GetDharmaBeingsGroupByPayload<T extends DharmaBeingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DharmaBeingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DharmaBeingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DharmaBeingsGroupByOutputType[P]>
            : GetScalarType<T[P], DharmaBeingsGroupByOutputType[P]>
        }
      >
    >


  export type DharmaBeingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["dharmaBeings"]>

  export type DharmaBeingsSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    attributes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    permissions?: boolean
  }


  export type $DharmaBeingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DharmaBeings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      attributes: string | null
      createdAt: Date
      updatedAt: Date
      permissions: string
    }, ExtArgs["result"]["dharmaBeings"]>
    composites: {}
  }


  type DharmaBeingsGetPayload<S extends boolean | null | undefined | DharmaBeingsDefaultArgs> = $Result.GetResult<Prisma.$DharmaBeingsPayload, S>

  type DharmaBeingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DharmaBeingsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DharmaBeingsCountAggregateInputType | true
    }

  export interface DharmaBeingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DharmaBeings'], meta: { name: 'DharmaBeings' } }
    /**
     * Find zero or one DharmaBeings that matches the filter.
     * @param {DharmaBeingsFindUniqueArgs} args - Arguments to find a DharmaBeings
     * @example
     * // Get one DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DharmaBeingsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaBeingsFindUniqueArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DharmaBeings that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DharmaBeingsFindUniqueOrThrowArgs} args - Arguments to find a DharmaBeings
     * @example
     * // Get one DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DharmaBeingsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaBeingsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DharmaBeings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsFindFirstArgs} args - Arguments to find a DharmaBeings
     * @example
     * // Get one DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DharmaBeingsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaBeingsFindFirstArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DharmaBeings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsFindFirstOrThrowArgs} args - Arguments to find a DharmaBeings
     * @example
     * // Get one DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DharmaBeingsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaBeingsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DharmaBeings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.findMany()
     * 
     * // Get first 10 DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dharmaBeingsWithIdOnly = await prisma.dharmaBeings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DharmaBeingsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaBeingsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DharmaBeings.
     * @param {DharmaBeingsCreateArgs} args - Arguments to create a DharmaBeings.
     * @example
     * // Create one DharmaBeings
     * const DharmaBeings = await prisma.dharmaBeings.create({
     *   data: {
     *     // ... data to create a DharmaBeings
     *   }
     * })
     * 
    **/
    create<T extends DharmaBeingsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaBeingsCreateArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a DharmaBeings.
     * @param {DharmaBeingsDeleteArgs} args - Arguments to delete one DharmaBeings.
     * @example
     * // Delete one DharmaBeings
     * const DharmaBeings = await prisma.dharmaBeings.delete({
     *   where: {
     *     // ... filter to delete one DharmaBeings
     *   }
     * })
     * 
    **/
    delete<T extends DharmaBeingsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaBeingsDeleteArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DharmaBeings.
     * @param {DharmaBeingsUpdateArgs} args - Arguments to update one DharmaBeings.
     * @example
     * // Update one DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DharmaBeingsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaBeingsUpdateArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DharmaBeings.
     * @param {DharmaBeingsDeleteManyArgs} args - Arguments to filter DharmaBeings to delete.
     * @example
     * // Delete a few DharmaBeings
     * const { count } = await prisma.dharmaBeings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DharmaBeingsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DharmaBeingsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DharmaBeings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DharmaBeingsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaBeingsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DharmaBeings.
     * @param {DharmaBeingsUpsertArgs} args - Arguments to update or create a DharmaBeings.
     * @example
     * // Update or create a DharmaBeings
     * const dharmaBeings = await prisma.dharmaBeings.upsert({
     *   create: {
     *     // ... data to create a DharmaBeings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DharmaBeings we want to update
     *   }
     * })
    **/
    upsert<T extends DharmaBeingsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DharmaBeingsUpsertArgs<ExtArgs>>
    ): Prisma__DharmaBeingsClient<$Result.GetResult<Prisma.$DharmaBeingsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DharmaBeings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsCountArgs} args - Arguments to filter DharmaBeings to count.
     * @example
     * // Count the number of DharmaBeings
     * const count = await prisma.dharmaBeings.count({
     *   where: {
     *     // ... the filter for the DharmaBeings we want to count
     *   }
     * })
    **/
    count<T extends DharmaBeingsCountArgs>(
      args?: Subset<T, DharmaBeingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DharmaBeingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DharmaBeings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DharmaBeingsAggregateArgs>(args: Subset<T, DharmaBeingsAggregateArgs>): Prisma.PrismaPromise<GetDharmaBeingsAggregateType<T>>

    /**
     * Group by DharmaBeings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DharmaBeingsGroupByArgs} args - Group by arguments.
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
      T extends DharmaBeingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DharmaBeingsGroupByArgs['orderBy'] }
        : { orderBy?: DharmaBeingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DharmaBeingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDharmaBeingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DharmaBeings model
   */
  readonly fields: DharmaBeingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DharmaBeings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DharmaBeingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DharmaBeings model
   */ 
  interface DharmaBeingsFieldRefs {
    readonly id: FieldRef<"DharmaBeings", 'Int'>
    readonly name: FieldRef<"DharmaBeings", 'String'>
    readonly type: FieldRef<"DharmaBeings", 'String'>
    readonly attributes: FieldRef<"DharmaBeings", 'String'>
    readonly createdAt: FieldRef<"DharmaBeings", 'DateTime'>
    readonly updatedAt: FieldRef<"DharmaBeings", 'DateTime'>
    readonly permissions: FieldRef<"DharmaBeings", 'String'>
  }
    

  // Custom InputTypes

  /**
   * DharmaBeings findUnique
   */
  export type DharmaBeingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * Filter, which DharmaBeings to fetch.
     */
    where: DharmaBeingsWhereUniqueInput
  }


  /**
   * DharmaBeings findUniqueOrThrow
   */
  export type DharmaBeingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * Filter, which DharmaBeings to fetch.
     */
    where: DharmaBeingsWhereUniqueInput
  }


  /**
   * DharmaBeings findFirst
   */
  export type DharmaBeingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * Filter, which DharmaBeings to fetch.
     */
    where?: DharmaBeingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaBeings to fetch.
     */
    orderBy?: DharmaBeingsOrderByWithRelationInput | DharmaBeingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DharmaBeings.
     */
    cursor?: DharmaBeingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaBeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaBeings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DharmaBeings.
     */
    distinct?: DharmaBeingsScalarFieldEnum | DharmaBeingsScalarFieldEnum[]
  }


  /**
   * DharmaBeings findFirstOrThrow
   */
  export type DharmaBeingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * Filter, which DharmaBeings to fetch.
     */
    where?: DharmaBeingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaBeings to fetch.
     */
    orderBy?: DharmaBeingsOrderByWithRelationInput | DharmaBeingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DharmaBeings.
     */
    cursor?: DharmaBeingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaBeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaBeings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DharmaBeings.
     */
    distinct?: DharmaBeingsScalarFieldEnum | DharmaBeingsScalarFieldEnum[]
  }


  /**
   * DharmaBeings findMany
   */
  export type DharmaBeingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * Filter, which DharmaBeings to fetch.
     */
    where?: DharmaBeingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DharmaBeings to fetch.
     */
    orderBy?: DharmaBeingsOrderByWithRelationInput | DharmaBeingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DharmaBeings.
     */
    cursor?: DharmaBeingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DharmaBeings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DharmaBeings.
     */
    skip?: number
    distinct?: DharmaBeingsScalarFieldEnum | DharmaBeingsScalarFieldEnum[]
  }


  /**
   * DharmaBeings create
   */
  export type DharmaBeingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * The data needed to create a DharmaBeings.
     */
    data: XOR<DharmaBeingsCreateInput, DharmaBeingsUncheckedCreateInput>
  }


  /**
   * DharmaBeings update
   */
  export type DharmaBeingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * The data needed to update a DharmaBeings.
     */
    data: XOR<DharmaBeingsUpdateInput, DharmaBeingsUncheckedUpdateInput>
    /**
     * Choose, which DharmaBeings to update.
     */
    where: DharmaBeingsWhereUniqueInput
  }


  /**
   * DharmaBeings updateMany
   */
  export type DharmaBeingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DharmaBeings.
     */
    data: XOR<DharmaBeingsUpdateManyMutationInput, DharmaBeingsUncheckedUpdateManyInput>
    /**
     * Filter which DharmaBeings to update
     */
    where?: DharmaBeingsWhereInput
  }


  /**
   * DharmaBeings upsert
   */
  export type DharmaBeingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * The filter to search for the DharmaBeings to update in case it exists.
     */
    where: DharmaBeingsWhereUniqueInput
    /**
     * In case the DharmaBeings found by the `where` argument doesn't exist, create a new DharmaBeings with this data.
     */
    create: XOR<DharmaBeingsCreateInput, DharmaBeingsUncheckedCreateInput>
    /**
     * In case the DharmaBeings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DharmaBeingsUpdateInput, DharmaBeingsUncheckedUpdateInput>
  }


  /**
   * DharmaBeings delete
   */
  export type DharmaBeingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
    /**
     * Filter which DharmaBeings to delete.
     */
    where: DharmaBeingsWhereUniqueInput
  }


  /**
   * DharmaBeings deleteMany
   */
  export type DharmaBeingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DharmaBeings to delete
     */
    where?: DharmaBeingsWhereInput
  }


  /**
   * DharmaBeings without action
   */
  export type DharmaBeingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DharmaBeings
     */
    select?: DharmaBeingsSelect<ExtArgs> | null
  }



  /**
   * Model DAOs
   */

  export type AggregateDAOs = {
    _count: DAOsCountAggregateOutputType | null
    _avg: DAOsAvgAggregateOutputType | null
    _sum: DAOsSumAggregateOutputType | null
    _min: DAOsMinAggregateOutputType | null
    _max: DAOsMaxAggregateOutputType | null
  }

  export type DAOsAvgAggregateOutputType = {
    id: number | null
    energy: number | null
    treasury: number | null
    parentId: number | null
  }

  export type DAOsSumAggregateOutputType = {
    id: number | null
    energy: number | null
    treasury: number | null
    parentId: number | null
  }

  export type DAOsMinAggregateOutputType = {
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

  export type DAOsMaxAggregateOutputType = {
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

  export type DAOsCountAggregateOutputType = {
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


  export type DAOsAvgAggregateInputType = {
    id?: true
    energy?: true
    treasury?: true
    parentId?: true
  }

  export type DAOsSumAggregateInputType = {
    id?: true
    energy?: true
    treasury?: true
    parentId?: true
  }

  export type DAOsMinAggregateInputType = {
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

  export type DAOsMaxAggregateInputType = {
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

  export type DAOsCountAggregateInputType = {
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

  export type DAOsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DAOs to aggregate.
     */
    where?: DAOsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DAOs to fetch.
     */
    orderBy?: DAOsOrderByWithRelationInput | DAOsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DAOsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DAOs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DAOs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DAOs
    **/
    _count?: true | DAOsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DAOsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DAOsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DAOsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DAOsMaxAggregateInputType
  }

  export type GetDAOsAggregateType<T extends DAOsAggregateArgs> = {
        [P in keyof T & keyof AggregateDAOs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDAOs[P]>
      : GetScalarType<T[P], AggregateDAOs[P]>
  }




  export type DAOsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DAOsWhereInput
    orderBy?: DAOsOrderByWithAggregationInput | DAOsOrderByWithAggregationInput[]
    by: DAOsScalarFieldEnum[] | DAOsScalarFieldEnum
    having?: DAOsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DAOsCountAggregateInputType | true
    _avg?: DAOsAvgAggregateInputType
    _sum?: DAOsSumAggregateInputType
    _min?: DAOsMinAggregateInputType
    _max?: DAOsMaxAggregateInputType
  }

  export type DAOsGroupByOutputType = {
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
    _count: DAOsCountAggregateOutputType | null
    _avg: DAOsAvgAggregateOutputType | null
    _sum: DAOsSumAggregateOutputType | null
    _min: DAOsMinAggregateOutputType | null
    _max: DAOsMaxAggregateOutputType | null
  }

  type GetDAOsGroupByPayload<T extends DAOsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DAOsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DAOsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DAOsGroupByOutputType[P]>
            : GetScalarType<T[P], DAOsGroupByOutputType[P]>
        }
      >
    >


  export type DAOsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    parent?: boolean | DAOs$parentArgs<ExtArgs>
    children?: boolean | DAOs$childrenArgs<ExtArgs>
    _count?: boolean | DAOsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dAOs"]>

  export type DAOsSelectScalar = {
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

  export type DAOsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | DAOs$parentArgs<ExtArgs>
    children?: boolean | DAOs$childrenArgs<ExtArgs>
    _count?: boolean | DAOsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DAOsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DAOs"
    objects: {
      parent: Prisma.$DAOsPayload<ExtArgs> | null
      children: Prisma.$DAOsPayload<ExtArgs>[]
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
    }, ExtArgs["result"]["dAOs"]>
    composites: {}
  }


  type DAOsGetPayload<S extends boolean | null | undefined | DAOsDefaultArgs> = $Result.GetResult<Prisma.$DAOsPayload, S>

  type DAOsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DAOsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DAOsCountAggregateInputType | true
    }

  export interface DAOsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DAOs'], meta: { name: 'DAOs' } }
    /**
     * Find zero or one DAOs that matches the filter.
     * @param {DAOsFindUniqueArgs} args - Arguments to find a DAOs
     * @example
     * // Get one DAOs
     * const dAOs = await prisma.dAOs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DAOsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DAOsFindUniqueArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one DAOs that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DAOsFindUniqueOrThrowArgs} args - Arguments to find a DAOs
     * @example
     * // Get one DAOs
     * const dAOs = await prisma.dAOs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DAOsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DAOsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first DAOs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsFindFirstArgs} args - Arguments to find a DAOs
     * @example
     * // Get one DAOs
     * const dAOs = await prisma.dAOs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DAOsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DAOsFindFirstArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first DAOs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsFindFirstOrThrowArgs} args - Arguments to find a DAOs
     * @example
     * // Get one DAOs
     * const dAOs = await prisma.dAOs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DAOsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DAOsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more DAOs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DAOs
     * const dAOs = await prisma.dAOs.findMany()
     * 
     * // Get first 10 DAOs
     * const dAOs = await prisma.dAOs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dAOsWithIdOnly = await prisma.dAOs.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DAOsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DAOsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a DAOs.
     * @param {DAOsCreateArgs} args - Arguments to create a DAOs.
     * @example
     * // Create one DAOs
     * const DAOs = await prisma.dAOs.create({
     *   data: {
     *     // ... data to create a DAOs
     *   }
     * })
     * 
    **/
    create<T extends DAOsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DAOsCreateArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a DAOs.
     * @param {DAOsDeleteArgs} args - Arguments to delete one DAOs.
     * @example
     * // Delete one DAOs
     * const DAOs = await prisma.dAOs.delete({
     *   where: {
     *     // ... filter to delete one DAOs
     *   }
     * })
     * 
    **/
    delete<T extends DAOsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DAOsDeleteArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one DAOs.
     * @param {DAOsUpdateArgs} args - Arguments to update one DAOs.
     * @example
     * // Update one DAOs
     * const dAOs = await prisma.dAOs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DAOsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DAOsUpdateArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more DAOs.
     * @param {DAOsDeleteManyArgs} args - Arguments to filter DAOs to delete.
     * @example
     * // Delete a few DAOs
     * const { count } = await prisma.dAOs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DAOsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DAOsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DAOs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DAOs
     * const dAOs = await prisma.dAOs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DAOsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DAOsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DAOs.
     * @param {DAOsUpsertArgs} args - Arguments to update or create a DAOs.
     * @example
     * // Update or create a DAOs
     * const dAOs = await prisma.dAOs.upsert({
     *   create: {
     *     // ... data to create a DAOs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DAOs we want to update
     *   }
     * })
    **/
    upsert<T extends DAOsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DAOsUpsertArgs<ExtArgs>>
    ): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of DAOs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsCountArgs} args - Arguments to filter DAOs to count.
     * @example
     * // Count the number of DAOs
     * const count = await prisma.dAOs.count({
     *   where: {
     *     // ... the filter for the DAOs we want to count
     *   }
     * })
    **/
    count<T extends DAOsCountArgs>(
      args?: Subset<T, DAOsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DAOsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DAOs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DAOsAggregateArgs>(args: Subset<T, DAOsAggregateArgs>): Prisma.PrismaPromise<GetDAOsAggregateType<T>>

    /**
     * Group by DAOs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DAOsGroupByArgs} args - Group by arguments.
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
      T extends DAOsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DAOsGroupByArgs['orderBy'] }
        : { orderBy?: DAOsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DAOsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDAOsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DAOs model
   */
  readonly fields: DAOsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DAOs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DAOsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends DAOs$parentArgs<ExtArgs> = {}>(args?: Subset<T, DAOs$parentArgs<ExtArgs>>): Prisma__DAOsClient<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    children<T extends DAOs$childrenArgs<ExtArgs> = {}>(args?: Subset<T, DAOs$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DAOsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the DAOs model
   */ 
  interface DAOsFieldRefs {
    readonly id: FieldRef<"DAOs", 'Int'>
    readonly name: FieldRef<"DAOs", 'String'>
    readonly description: FieldRef<"DAOs", 'String'>
    readonly energy: FieldRef<"DAOs", 'Int'>
    readonly treasury: FieldRef<"DAOs", 'Int'>
    readonly accounts: FieldRef<"DAOs", 'String'>
    readonly canvas: FieldRef<"DAOs", 'String'>
    readonly createdAt: FieldRef<"DAOs", 'DateTime'>
    readonly updatedAt: FieldRef<"DAOs", 'DateTime'>
    readonly parentId: FieldRef<"DAOs", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * DAOs findUnique
   */
  export type DAOsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * Filter, which DAOs to fetch.
     */
    where: DAOsWhereUniqueInput
  }


  /**
   * DAOs findUniqueOrThrow
   */
  export type DAOsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * Filter, which DAOs to fetch.
     */
    where: DAOsWhereUniqueInput
  }


  /**
   * DAOs findFirst
   */
  export type DAOsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * Filter, which DAOs to fetch.
     */
    where?: DAOsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DAOs to fetch.
     */
    orderBy?: DAOsOrderByWithRelationInput | DAOsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DAOs.
     */
    cursor?: DAOsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DAOs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DAOs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DAOs.
     */
    distinct?: DAOsScalarFieldEnum | DAOsScalarFieldEnum[]
  }


  /**
   * DAOs findFirstOrThrow
   */
  export type DAOsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * Filter, which DAOs to fetch.
     */
    where?: DAOsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DAOs to fetch.
     */
    orderBy?: DAOsOrderByWithRelationInput | DAOsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DAOs.
     */
    cursor?: DAOsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DAOs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DAOs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DAOs.
     */
    distinct?: DAOsScalarFieldEnum | DAOsScalarFieldEnum[]
  }


  /**
   * DAOs findMany
   */
  export type DAOsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * Filter, which DAOs to fetch.
     */
    where?: DAOsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DAOs to fetch.
     */
    orderBy?: DAOsOrderByWithRelationInput | DAOsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DAOs.
     */
    cursor?: DAOsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DAOs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DAOs.
     */
    skip?: number
    distinct?: DAOsScalarFieldEnum | DAOsScalarFieldEnum[]
  }


  /**
   * DAOs create
   */
  export type DAOsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * The data needed to create a DAOs.
     */
    data: XOR<DAOsCreateInput, DAOsUncheckedCreateInput>
  }


  /**
   * DAOs update
   */
  export type DAOsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * The data needed to update a DAOs.
     */
    data: XOR<DAOsUpdateInput, DAOsUncheckedUpdateInput>
    /**
     * Choose, which DAOs to update.
     */
    where: DAOsWhereUniqueInput
  }


  /**
   * DAOs updateMany
   */
  export type DAOsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DAOs.
     */
    data: XOR<DAOsUpdateManyMutationInput, DAOsUncheckedUpdateManyInput>
    /**
     * Filter which DAOs to update
     */
    where?: DAOsWhereInput
  }


  /**
   * DAOs upsert
   */
  export type DAOsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * The filter to search for the DAOs to update in case it exists.
     */
    where: DAOsWhereUniqueInput
    /**
     * In case the DAOs found by the `where` argument doesn't exist, create a new DAOs with this data.
     */
    create: XOR<DAOsCreateInput, DAOsUncheckedCreateInput>
    /**
     * In case the DAOs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DAOsUpdateInput, DAOsUncheckedUpdateInput>
  }


  /**
   * DAOs delete
   */
  export type DAOsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    /**
     * Filter which DAOs to delete.
     */
    where: DAOsWhereUniqueInput
  }


  /**
   * DAOs deleteMany
   */
  export type DAOsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DAOs to delete
     */
    where?: DAOsWhereInput
  }


  /**
   * DAOs.parent
   */
  export type DAOs$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    where?: DAOsWhereInput
  }


  /**
   * DAOs.children
   */
  export type DAOs$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
    where?: DAOsWhereInput
    orderBy?: DAOsOrderByWithRelationInput | DAOsOrderByWithRelationInput[]
    cursor?: DAOsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DAOsScalarFieldEnum | DAOsScalarFieldEnum[]
  }


  /**
   * DAOs without action
   */
  export type DAOsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DAOs
     */
    select?: DAOsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DAOsInclude<ExtArgs> | null
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
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    hashedPassword: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    role: number
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
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    hashedPassword?: true
    role?: true
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
    role: string
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
    role?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memories?: boolean | User$memoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    hashedPassword?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    memories?: boolean | User$memoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      memories: Prisma.$UserMemoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      hashedPassword: string | null
      role: string
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

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    memories<T extends User$memoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$memoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMemoryPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly role: FieldRef<"User", 'String'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DharmaBeingsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    attributes: 'attributes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    permissions: 'permissions'
  };

  export type DharmaBeingsScalarFieldEnum = (typeof DharmaBeingsScalarFieldEnum)[keyof typeof DharmaBeingsScalarFieldEnum]


  export const DAOsScalarFieldEnum: {
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

  export type DAOsScalarFieldEnum = (typeof DAOsScalarFieldEnum)[keyof typeof DAOsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashedPassword: 'hashedPassword',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DharmaBeingsWhereInput = {
    AND?: DharmaBeingsWhereInput | DharmaBeingsWhereInput[]
    OR?: DharmaBeingsWhereInput[]
    NOT?: DharmaBeingsWhereInput | DharmaBeingsWhereInput[]
    id?: IntFilter<"DharmaBeings"> | number
    name?: StringFilter<"DharmaBeings"> | string
    type?: StringFilter<"DharmaBeings"> | string
    attributes?: StringNullableFilter<"DharmaBeings"> | string | null
    createdAt?: DateTimeFilter<"DharmaBeings"> | Date | string
    updatedAt?: DateTimeFilter<"DharmaBeings"> | Date | string
    permissions?: StringFilter<"DharmaBeings"> | string
  }

  export type DharmaBeingsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmaBeingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DharmaBeingsWhereInput | DharmaBeingsWhereInput[]
    OR?: DharmaBeingsWhereInput[]
    NOT?: DharmaBeingsWhereInput | DharmaBeingsWhereInput[]
    name?: StringFilter<"DharmaBeings"> | string
    type?: StringFilter<"DharmaBeings"> | string
    attributes?: StringNullableFilter<"DharmaBeings"> | string | null
    createdAt?: DateTimeFilter<"DharmaBeings"> | Date | string
    updatedAt?: DateTimeFilter<"DharmaBeings"> | Date | string
    permissions?: StringFilter<"DharmaBeings"> | string
  }, "id">

  export type DharmaBeingsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
    _count?: DharmaBeingsCountOrderByAggregateInput
    _avg?: DharmaBeingsAvgOrderByAggregateInput
    _max?: DharmaBeingsMaxOrderByAggregateInput
    _min?: DharmaBeingsMinOrderByAggregateInput
    _sum?: DharmaBeingsSumOrderByAggregateInput
  }

  export type DharmaBeingsScalarWhereWithAggregatesInput = {
    AND?: DharmaBeingsScalarWhereWithAggregatesInput | DharmaBeingsScalarWhereWithAggregatesInput[]
    OR?: DharmaBeingsScalarWhereWithAggregatesInput[]
    NOT?: DharmaBeingsScalarWhereWithAggregatesInput | DharmaBeingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DharmaBeings"> | number
    name?: StringWithAggregatesFilter<"DharmaBeings"> | string
    type?: StringWithAggregatesFilter<"DharmaBeings"> | string
    attributes?: StringNullableWithAggregatesFilter<"DharmaBeings"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DharmaBeings"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DharmaBeings"> | Date | string
    permissions?: StringWithAggregatesFilter<"DharmaBeings"> | string
  }

  export type DAOsWhereInput = {
    AND?: DAOsWhereInput | DAOsWhereInput[]
    OR?: DAOsWhereInput[]
    NOT?: DAOsWhereInput | DAOsWhereInput[]
    id?: IntFilter<"DAOs"> | number
    name?: StringFilter<"DAOs"> | string
    description?: StringNullableFilter<"DAOs"> | string | null
    energy?: IntFilter<"DAOs"> | number
    treasury?: IntFilter<"DAOs"> | number
    accounts?: StringNullableFilter<"DAOs"> | string | null
    canvas?: StringNullableFilter<"DAOs"> | string | null
    createdAt?: DateTimeFilter<"DAOs"> | Date | string
    updatedAt?: DateTimeFilter<"DAOs"> | Date | string
    parentId?: IntNullableFilter<"DAOs"> | number | null
    parent?: XOR<DAOsNullableRelationFilter, DAOsWhereInput> | null
    children?: DAOsListRelationFilter
  }

  export type DAOsOrderByWithRelationInput = {
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
    parent?: DAOsOrderByWithRelationInput
    children?: DAOsOrderByRelationAggregateInput
  }

  export type DAOsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DAOsWhereInput | DAOsWhereInput[]
    OR?: DAOsWhereInput[]
    NOT?: DAOsWhereInput | DAOsWhereInput[]
    name?: StringFilter<"DAOs"> | string
    description?: StringNullableFilter<"DAOs"> | string | null
    energy?: IntFilter<"DAOs"> | number
    treasury?: IntFilter<"DAOs"> | number
    accounts?: StringNullableFilter<"DAOs"> | string | null
    canvas?: StringNullableFilter<"DAOs"> | string | null
    createdAt?: DateTimeFilter<"DAOs"> | Date | string
    updatedAt?: DateTimeFilter<"DAOs"> | Date | string
    parentId?: IntNullableFilter<"DAOs"> | number | null
    parent?: XOR<DAOsNullableRelationFilter, DAOsWhereInput> | null
    children?: DAOsListRelationFilter
  }, "id">

  export type DAOsOrderByWithAggregationInput = {
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
    _count?: DAOsCountOrderByAggregateInput
    _avg?: DAOsAvgOrderByAggregateInput
    _max?: DAOsMaxOrderByAggregateInput
    _min?: DAOsMinOrderByAggregateInput
    _sum?: DAOsSumOrderByAggregateInput
  }

  export type DAOsScalarWhereWithAggregatesInput = {
    AND?: DAOsScalarWhereWithAggregatesInput | DAOsScalarWhereWithAggregatesInput[]
    OR?: DAOsScalarWhereWithAggregatesInput[]
    NOT?: DAOsScalarWhereWithAggregatesInput | DAOsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DAOs"> | number
    name?: StringWithAggregatesFilter<"DAOs"> | string
    description?: StringNullableWithAggregatesFilter<"DAOs"> | string | null
    energy?: IntWithAggregatesFilter<"DAOs"> | number
    treasury?: IntWithAggregatesFilter<"DAOs"> | number
    accounts?: StringNullableWithAggregatesFilter<"DAOs"> | string | null
    canvas?: StringNullableWithAggregatesFilter<"DAOs"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DAOs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DAOs"> | Date | string
    parentId?: IntNullableWithAggregatesFilter<"DAOs"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    memories?: UserMemoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    memories?: UserMemoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashedPassword?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    memories?: UserMemoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrderInput | SortOrder
    role?: SortOrder
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
    role?: StringWithAggregatesFilter<"User"> | string
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

  export type DharmaBeingsCreateInput = {
    name: string
    type: string
    attributes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions: string
  }

  export type DharmaBeingsUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    attributes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions: string
  }

  export type DharmaBeingsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaBeingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaBeingsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DharmaBeingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    attributes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: StringFieldUpdateOperationsInput | string
  }

  export type DAOsCreateInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DAOsCreateNestedOneWithoutChildrenInput
    children?: DAOsCreateNestedManyWithoutParentInput
  }

  export type DAOsUncheckedCreateInput = {
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
    children?: DAOsUncheckedCreateNestedManyWithoutParentInput
  }

  export type DAOsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DAOsUpdateOneWithoutChildrenNestedInput
    children?: DAOsUpdateManyWithoutParentNestedInput
  }

  export type DAOsUncheckedUpdateInput = {
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
    children?: DAOsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DAOsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DAOsUncheckedUpdateManyInput = {
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

  export type UserCreateInput = {
    email: string
    hashedPassword?: string | null
    role?: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    memories?: UserMemoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    role?: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    memories?: UserMemoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    memories?: UserMemoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DharmaBeingsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmaBeingsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DharmaBeingsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmaBeingsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    attributes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    permissions?: SortOrder
  }

  export type DharmaBeingsSumOrderByAggregateInput = {
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

  export type DAOsNullableRelationFilter = {
    is?: DAOsWhereInput | null
    isNot?: DAOsWhereInput | null
  }

  export type DAOsListRelationFilter = {
    every?: DAOsWhereInput
    some?: DAOsWhereInput
    none?: DAOsWhereInput
  }

  export type DAOsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DAOsCountOrderByAggregateInput = {
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

  export type DAOsAvgOrderByAggregateInput = {
    id?: SortOrder
    energy?: SortOrder
    treasury?: SortOrder
    parentId?: SortOrder
  }

  export type DAOsMaxOrderByAggregateInput = {
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

  export type DAOsMinOrderByAggregateInput = {
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

  export type DAOsSumOrderByAggregateInput = {
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
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    hashedPassword?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DAOsCreateNestedOneWithoutChildrenInput = {
    create?: XOR<DAOsCreateWithoutChildrenInput, DAOsUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DAOsCreateOrConnectWithoutChildrenInput
    connect?: DAOsWhereUniqueInput
  }

  export type DAOsCreateNestedManyWithoutParentInput = {
    create?: XOR<DAOsCreateWithoutParentInput, DAOsUncheckedCreateWithoutParentInput> | DAOsCreateWithoutParentInput[] | DAOsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DAOsCreateOrConnectWithoutParentInput | DAOsCreateOrConnectWithoutParentInput[]
    connect?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
  }

  export type DAOsUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<DAOsCreateWithoutParentInput, DAOsUncheckedCreateWithoutParentInput> | DAOsCreateWithoutParentInput[] | DAOsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DAOsCreateOrConnectWithoutParentInput | DAOsCreateOrConnectWithoutParentInput[]
    connect?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
  }

  export type DAOsUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<DAOsCreateWithoutChildrenInput, DAOsUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: DAOsCreateOrConnectWithoutChildrenInput
    upsert?: DAOsUpsertWithoutChildrenInput
    disconnect?: DAOsWhereInput | boolean
    delete?: DAOsWhereInput | boolean
    connect?: DAOsWhereUniqueInput
    update?: XOR<XOR<DAOsUpdateToOneWithWhereWithoutChildrenInput, DAOsUpdateWithoutChildrenInput>, DAOsUncheckedUpdateWithoutChildrenInput>
  }

  export type DAOsUpdateManyWithoutParentNestedInput = {
    create?: XOR<DAOsCreateWithoutParentInput, DAOsUncheckedCreateWithoutParentInput> | DAOsCreateWithoutParentInput[] | DAOsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DAOsCreateOrConnectWithoutParentInput | DAOsCreateOrConnectWithoutParentInput[]
    upsert?: DAOsUpsertWithWhereUniqueWithoutParentInput | DAOsUpsertWithWhereUniqueWithoutParentInput[]
    set?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    disconnect?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    delete?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    connect?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    update?: DAOsUpdateWithWhereUniqueWithoutParentInput | DAOsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DAOsUpdateManyWithWhereWithoutParentInput | DAOsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DAOsScalarWhereInput | DAOsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DAOsUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<DAOsCreateWithoutParentInput, DAOsUncheckedCreateWithoutParentInput> | DAOsCreateWithoutParentInput[] | DAOsUncheckedCreateWithoutParentInput[]
    connectOrCreate?: DAOsCreateOrConnectWithoutParentInput | DAOsCreateOrConnectWithoutParentInput[]
    upsert?: DAOsUpsertWithWhereUniqueWithoutParentInput | DAOsUpsertWithWhereUniqueWithoutParentInput[]
    set?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    disconnect?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    delete?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    connect?: DAOsWhereUniqueInput | DAOsWhereUniqueInput[]
    update?: DAOsUpdateWithWhereUniqueWithoutParentInput | DAOsUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: DAOsUpdateManyWithWhereWithoutParentInput | DAOsUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: DAOsScalarWhereInput | DAOsScalarWhereInput[]
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

  export type DAOsCreateWithoutChildrenInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: DAOsCreateNestedOneWithoutChildrenInput
  }

  export type DAOsUncheckedCreateWithoutChildrenInput = {
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
  }

  export type DAOsCreateOrConnectWithoutChildrenInput = {
    where: DAOsWhereUniqueInput
    create: XOR<DAOsCreateWithoutChildrenInput, DAOsUncheckedCreateWithoutChildrenInput>
  }

  export type DAOsCreateWithoutParentInput = {
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DAOsCreateNestedManyWithoutParentInput
  }

  export type DAOsUncheckedCreateWithoutParentInput = {
    id?: number
    name: string
    description?: string | null
    energy: number
    treasury: number
    accounts?: string | null
    canvas?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: DAOsUncheckedCreateNestedManyWithoutParentInput
  }

  export type DAOsCreateOrConnectWithoutParentInput = {
    where: DAOsWhereUniqueInput
    create: XOR<DAOsCreateWithoutParentInput, DAOsUncheckedCreateWithoutParentInput>
  }

  export type DAOsUpsertWithoutChildrenInput = {
    update: XOR<DAOsUpdateWithoutChildrenInput, DAOsUncheckedUpdateWithoutChildrenInput>
    create: XOR<DAOsCreateWithoutChildrenInput, DAOsUncheckedCreateWithoutChildrenInput>
    where?: DAOsWhereInput
  }

  export type DAOsUpdateToOneWithWhereWithoutChildrenInput = {
    where?: DAOsWhereInput
    data: XOR<DAOsUpdateWithoutChildrenInput, DAOsUncheckedUpdateWithoutChildrenInput>
  }

  export type DAOsUpdateWithoutChildrenInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: DAOsUpdateOneWithoutChildrenNestedInput
  }

  export type DAOsUncheckedUpdateWithoutChildrenInput = {
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

  export type DAOsUpsertWithWhereUniqueWithoutParentInput = {
    where: DAOsWhereUniqueInput
    update: XOR<DAOsUpdateWithoutParentInput, DAOsUncheckedUpdateWithoutParentInput>
    create: XOR<DAOsCreateWithoutParentInput, DAOsUncheckedCreateWithoutParentInput>
  }

  export type DAOsUpdateWithWhereUniqueWithoutParentInput = {
    where: DAOsWhereUniqueInput
    data: XOR<DAOsUpdateWithoutParentInput, DAOsUncheckedUpdateWithoutParentInput>
  }

  export type DAOsUpdateManyWithWhereWithoutParentInput = {
    where: DAOsScalarWhereInput
    data: XOR<DAOsUpdateManyMutationInput, DAOsUncheckedUpdateManyWithoutParentInput>
  }

  export type DAOsScalarWhereInput = {
    AND?: DAOsScalarWhereInput | DAOsScalarWhereInput[]
    OR?: DAOsScalarWhereInput[]
    NOT?: DAOsScalarWhereInput | DAOsScalarWhereInput[]
    id?: IntFilter<"DAOs"> | number
    name?: StringFilter<"DAOs"> | string
    description?: StringNullableFilter<"DAOs"> | string | null
    energy?: IntFilter<"DAOs"> | number
    treasury?: IntFilter<"DAOs"> | number
    accounts?: StringNullableFilter<"DAOs"> | string | null
    canvas?: StringNullableFilter<"DAOs"> | string | null
    createdAt?: DateTimeFilter<"DAOs"> | Date | string
    updatedAt?: DateTimeFilter<"DAOs"> | Date | string
    parentId?: IntNullableFilter<"DAOs"> | number | null
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

  export type UserCreateWithoutMemoriesInput = {
    email: string
    hashedPassword?: string | null
    role?: string
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMemoriesInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    role?: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
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
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMemoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    hashedPassword?: string | null
    role?: string
    memories?: UserMemoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    hashedPassword?: string | null
    role?: string
    memories?: UserMemoryUncheckedCreateNestedManyWithoutUserInput
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
    role?: StringFieldUpdateOperationsInput | string
    memories?: UserMemoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    memories?: UserMemoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DAOsUpdateWithoutParentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DAOsUpdateManyWithoutParentNestedInput
  }

  export type DAOsUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    energy?: IntFieldUpdateOperationsInput | number
    treasury?: IntFieldUpdateOperationsInput | number
    accounts?: NullableStringFieldUpdateOperationsInput | string | null
    canvas?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: DAOsUncheckedUpdateManyWithoutParentNestedInput
  }

  export type DAOsUncheckedUpdateManyWithoutParentInput = {
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DAOsCountOutputTypeDefaultArgs instead
     */
    export type DAOsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DAOsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DharmaBeingsDefaultArgs instead
     */
    export type DharmaBeingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DharmaBeingsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DAOsDefaultArgs instead
     */
    export type DAOsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DAOsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserMemoryDefaultArgs instead
     */
    export type UserMemoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserMemoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>

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