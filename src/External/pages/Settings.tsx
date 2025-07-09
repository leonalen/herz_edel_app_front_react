import { Button } from "@mui/material"


export const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
          <Button onClick={() => alert('Settings saved!')}>Save Settings</Button>
    </div>
  )
    
}
