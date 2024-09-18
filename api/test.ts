import { formatUnits } from 'viem'
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
    request: VercelRequest,
    response: VercelResponse
) {
    response.status(200).json('https://bit.ly/47tVWj1')

}