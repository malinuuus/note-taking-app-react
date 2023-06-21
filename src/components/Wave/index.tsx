import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Wave as WaveStyle } from './styles'

export const Wave = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <WaveStyle $background={theme.waveBackground}>
      <svg className='wave-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={theme.waveBackground} fillOpacity="1" d="M0,160L34.3,160C68.6,160,137,160,206,149.3C274.3,139,343,117,411,106.7C480,96,549,96,617,101.3C685.7,107,754,117,823,144C891.4,171,960,213,1029,213.3C1097.1,213,1166,171,1234,144C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
      <div className='space-under'></div>
    </WaveStyle>
  )
}
