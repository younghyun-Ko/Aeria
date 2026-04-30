'use server'

import { createClient } from '@/lib/supabase/server'
import { loginSchema, signupSchema } from '@/lib/validations/auth'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signUp(formData: FormData) {
  const supabase = createClient()

  const rawData = Object.fromEntries(formData.entries())
  const validation = signupSchema.safeParse(rawData)

  if (!validation.success) {
    return { error: validation.error.errors[0].message }
  }

  const { email, password, nickname } = validation.data

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        nickname,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
    },
  })

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  return { error: null, success: true }
}

export async function signIn(formData: FormData) {
  const supabase = createClient()

  const rawData = Object.fromEntries(formData.entries())
  const validation = loginSchema.safeParse(rawData)

  if (!validation.success) {
    return { error: validation.error.errors[0].message }
  }

  const { email, password } = validation.data

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: '이메일 또는 비밀번호가 일치하지 않습니다.' }
  }

  revalidatePath('/', 'layout')
  return { error: null, success: true }
}

export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
