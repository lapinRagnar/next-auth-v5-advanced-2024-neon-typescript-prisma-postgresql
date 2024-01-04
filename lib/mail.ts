import { Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY)


export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`
  
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
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirmer votre adresse email",
    html: `
      <p> <a href="${confirmLink}">Cliquer sur ce lien pour confirmer votre adresse email</a></p>
    
    `
  })

}



