import { defineConfig, globalIgnores } from "eslint/config";
import next from "eslint-config-next";

export default defineConfig([
    globalIgnores([".next/**", ".next-dev/**", ".open-next/**", "out/**", "node_modules/**"]),
    {
        extends: [...next],
    },
]);
