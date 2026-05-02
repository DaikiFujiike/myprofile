import OpenAI from 'openai';
import { NextResponse } from 'next/server';
const systemPrompt=`あなたは「SelfTalkLab」という自己対話支援AIです。E/R/I/S/A + Reflection Digest形式で日本語で簡潔に返答してください。危機対応時は安全確保を最優先。`;
export async function POST(req:Request){try{const {message}=await req.json();if(!message?.trim())return NextResponse.json({error:'入力が空です。'}, {status:400});const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});const completion=await client.chat.completions.create({model:'gpt-4.1-mini',messages:[{role:'system',content:systemPrompt},{role:'user',content:message}],temperature:0.7});return NextResponse.json({reply:completion.choices[0]?.message?.content??'応答を生成できませんでした。'});}catch{return NextResponse.json({error:'AI応答の取得に失敗しました。時間をおいて再試行してください。'},{status:500});}}
