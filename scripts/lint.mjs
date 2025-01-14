/**
 * TODO: Add some simple lint rules to act on the schema source.
 *
 * - `{ $ref: ... }` schemas should contain no other keywords
 * - All `$ref` values should map to a real file on the file system
 * - Schemas should have globally unique names
 * - Whitelist supported keywords
 * - Every schema file should have a populated `title` and `description`
 * - Check that properties referenced in `required` are present in the schema
 * - Do we want to enforce `description` on _all_ properties?
 * - ...
 */
