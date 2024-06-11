import GitHubCalendar from "react-github-calendar"
import { useEffect,useState } from "react"
function GithubCallender() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[]);
    const selectLastSixMonths = (contributions) => {
        const now = new Date();
        const sixMonthsAgo = new Date(now.setMonth(now.getMonth() - 6));
        
        return contributions.filter(day => {
          const date = new Date(day.date);
          return date >= sixMonthsAgo;
        });
      };
  return (
    <div className="overflow-x-auto">
        {
            width < 340 ? <GitHubCalendar
            username="faricandrevano"
            blockSize={6}
           blockMargin={3}
           color="#c084f5"
           fontSize={7}
           transformData={selectLastSixMonths}
            /> : width < 440 ? <GitHubCalendar
            username="faricandrevano"
            blockSize={6}
           blockMargin={4}
           color="#c084f5"
           fontSize={11}
           transformData={selectLastSixMonths}
            /> :
            width <= 768? <GitHubCalendar
            username="faricandrevano"
            blockSize={7}
           blockMargin={5}
           color="#c084f5"
           fontSize={12}
            />  
            : width < 1024 ?
            <GitHubCalendar
            username="faricandrevano"
            blockSize={8}
           blockMargin={5}
           color="#c084f5"
           fontSize={16}
            /> :
            <GitHubCalendar
           username="faricandrevano"
           blockSize={16}
          blockMargin={5}
          color="#c084f5"
          fontSize={16} />
        }
    </div>
  )
}

export default GithubCallender