import { Link, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {}

const Dashboard = ({ history }: Props) => {
    return (
        <>
            <h1 className="text-5xl font-bold">Ini dashboard</h1>
            {/* <a onClick={history.goBack}>Previous Page</a> */}
            <br />
            <Link to="/" className="mr-2 text-blue-500 underline">Dashboard</Link>
            <Link to="/profile" className="text-blue-500 underline">Profile</Link>
        </>
    )
}

export default Dashboard