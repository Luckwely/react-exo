
import Container from '../components/container'
import UserForm from '../components/forms/user-form'

export default function FormTestPage() {
  return (
    <Container>
        <h2>List form</h2>
        <div className='grid grid-cols-3'>
            <UserForm />
        </div>
    </Container>
  )
}
