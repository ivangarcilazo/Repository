import WaveS3 from './Wave/Wave'

import AboutSection from './AboutSection/AboutSection'

export default function About (props) {
  const { font } = props

  return (
    <>
      <WaveS3 />
      <div>
        <AboutSection font={font} />
      </div>
    </>

  )
}
