import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className ='featuredItem'>
          <spen className="featuredTitle">Revanue</spen>
          <div className="featuredMoneyContainer">
              <span className="featureMoney">$2,415</span>
              <span className="featureMoneyRate">$-11.4 <ArrowDownward className='featuredIcon negative'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className ='featuredItem'>
          <spen className="featuredTitle">Sales</spen>
          <div className="featuredMoneyContainer">
              <span className="featureMoney">$2,312</span>
              <span className="featureMoneyRate">$-11.4 <ArrowDownward className='featuredIcon negative' /></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
      <div className ='featuredItem'>
          <spen className="featuredTitle">Cost</spen>
          <div className="featuredMoneyContainer">
              <span className="featureMoney">$2,225</span>
              <span className="featureMoneyRate">$-11.4 <ArrowUpward className='featuredIcon'/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
