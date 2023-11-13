import useBoundStore from "./store";
import './App.css'

export default function App() {
	const count = useBoundStore((state) => state.count);

	return (
		<>
			<h1 className="text-3xl font-bold text-green-900">Hello world!</h1>
		</>
	);
}
