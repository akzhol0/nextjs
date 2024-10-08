import Dashboard from "@/components/Dashboard";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: 'Dashboard',
  description: 'Next App Learning',
};

export default function DashboardPage() {
  const auth = false;

  let children = (
    <Login/>
  )

  if (auth) {
    children = (
      <Dashboard/>
    )
  }

  return (
    <Main>
      {children}
    </Main>
  )
}