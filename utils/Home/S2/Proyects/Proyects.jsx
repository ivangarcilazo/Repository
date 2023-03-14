import NavgiationProyects from './Navigation/NavigationProyects'
import Title from './Title/Title'
import Information from './Information/Information'

export default function Proyects (props) {
  const { font } = props

  return (
    <>
      <Title font={font} />
      <NavgiationProyects font={font} />
      <Information font={font} />
    </>
  )
}
