import { Card } from "../components/ui/Card"


export const Dashboard = () => {

  return(
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Dashboard" content="Welcome to the dashboard!" />
      <Card title="Statistics" content="Here are some stats." />
  </div>

  )
   
}
