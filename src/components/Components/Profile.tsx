export type ProfileProps = {
    name: string
}

const Profile = ({name}: ProfileProps) => {
    return (
        <div>
            Private Profile components Name is {name}
        </div>
    )
}
export default Profile;