import "/node_modules/bootstrap/dist/css/bootstrap.css"
import Mycard from './card_component'
import './App.css'

//Root App
function App() {
  let contents = [
    {
      plan: "FREE",
      price: 0,
      features: [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "50GB Storage",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true
        },
        {
          name: "Community Access",
          enable: true
        },
        {
          name: "Unlimited Private Projects",
          enable: false
        },
        {
          name: "Dedicated Phone Support",
          enable: false
        },
        {
          name: "Free Subdomain",
          enable: false
        },
        {
          name: "Monthly Status Reports",
          enable: false
        }
      ],
      buttonfocus: false
    },

    {
      plan: "PLUS",
      price: 9,
      features: [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "50GB Storage",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true
        },
        {
          name: "Community Access",
          enable: true
        },
        {
          name: "Unlimited Private Projects",
          enable: true
        },
        {
          name: "Dedicated Phone Support",
          enable: true
        },
        {
          name: "Free Subdomain",
          enable: true
        },
        {
          name: "Monthly Status Reports",
          enable: false
        }],
      buttonfocus: false
    },

    {
      plan: "PRO",
      price: 49,
      features: [
        {
          name: "Single User",
          enable: true,
        },
        {
          name: "50GB Storage",
          enable: true,
        },
        {
          name: "Unlimited Public Projects",
          enable: true
        },
        {
          name: "Community Access",
          enable: true
        },
        {
          name: "Unlimited Private Projects",
          enable: true
        },
        {
          name: "Dedicated Phone Support",
          enable: true
        },
        {
          name: "Free Subdomain",
          enable: true
        },
        {
          name: "Monthly Status Reports",
          enable: true
        }
      ],
      buttonfocus: true
    },
  ]

  return (
    <>
      <div className='container'>
        <div className='row'>
          {
            contents.map((item, index) => {
              return (
                <Mycard data={item} key={index} />
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default App;
