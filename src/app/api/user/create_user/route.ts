import { NextRequest, NextResponse } from "next/server";
import {  DynamoDBClient} from '@aws-sdk/client-dynamodb'

export async function PUT(req:NextRequest, res:NextResponse){

    const client = new DynamoDBClient({})

}