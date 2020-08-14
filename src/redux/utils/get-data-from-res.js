export default function getDataFromResponse(res) {
	try {
		return res.data.payload.data;
	} catch (e) {
		throw new Error('');
	}
}
