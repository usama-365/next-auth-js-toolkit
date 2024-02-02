import paths from "@/lib/paths";
import CardWrapper from "./card-wrapper";

export default function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      backButtonLabel="Don't have an account?"
      backButtonHref={paths.registerPage()}
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
}
