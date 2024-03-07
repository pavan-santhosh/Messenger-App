import { Redis } from '@upstash/redis'

export const db = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || '', // || '' --> added because otherwise it gives error stating no overload function matches
    token: process.env.UPSTASH_REDIS_REST_TOKEN || '', 
});

/*
ALTERNATIVE:

export const db = Redis.fromEnv()

// This will automatically load the variables from your environment and bypasses the constructor.
*/
