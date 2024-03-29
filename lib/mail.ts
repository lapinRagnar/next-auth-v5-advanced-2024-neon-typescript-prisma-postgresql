import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)


const domain = process.env.NEXT_PUBLIC_APP_URL


export const sendTwoFactorTokenEmail = async (email: string, token: string) => {

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Code de securité - double authentification",
    html: `
      <p> votre code de securité est : ${token} </p>
    `
  })
}


export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`
  
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reinitialiser votre mot de passe",
    html: `
      <p> <a href="${resetLink}">Cliquer sur ce lien pour reinitialiser votre mot de passe</a></p>
    
    `
  })
}


export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirmer votre adresse email",
    html: `
      <p> <a href="${confirmLink}">Cliquer sur ce lien pour confirmer votre adresse email</a></p>
    
    `
  })

}



