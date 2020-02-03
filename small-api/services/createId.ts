/** ran into this error when trying to use uuid
 error TS2349: This expression is not callable.
  Type 'typeof import("https://deno.land/std/uuid/v4")' has no call signatures.

► file:///Users/haatwal/qode/deno_server/small-api/services/createId.ts:3:22

3 export default () => uuid();
 */
// import { v4 as uuid } from "https://deno.land/std/uuid/mod.ts";

// export default () => uuid();
export default () => `${Date.now()}`;