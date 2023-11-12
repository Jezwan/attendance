const jsonData = [
  {"ts": "1699727403005", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A1", "name": "Aby mathew", "status": "Exit"}, {"ts": "1699727413668", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699727395068", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699727412620", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699727359206", "date": "Sat Nov 11 18:29:12 2023\n", "id": "A1", "name": "Aby mathew", "status": "Entry"}, {"ts": "1699718589626", "date": "Sat Nov 11 16:03:05 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699727582271", "date": "Sat Nov 11 18:32:54 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699727459943", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699727524652", "date": "Sat Nov 11 18:31:49 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699718587914", "date": "Sat Nov 11 16:03:05 2023\n", "id": "A1", "name": "Aby mathew", "status": "Entry"}, {"ts": "1699727457953", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699727458645", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699727440145", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A1", "name": "Aby mathew", "status": "Exit"}, {"ts": "1699727432872", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699727356754", "date": "Sat Nov 11 18:29:12 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699718592713", "date": "Sat Nov 11 16:03:05 2023\n", "id": "A1", "name": "Aby mathew", "status": "Exit"}, {"ts": "1699727431649", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699718595966", "date": "Sat Nov 11 16:03:05 2023\n", "id": "A2", "name": "Bob Simon", "status": "Exit"}, {"ts": "1699718597214", "date": "Sat Nov 11 16:03:05 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699718599241", "date": "Sat Nov 11 16:03:05 2023\n", "id": "A1", "name": "Aby mathew", "status": "Entry"}, {"ts": "1699727581086", "date": "Sat Nov 11 18:32:54 2023\n", "id": "A2", "name": "Bob Simon", "status": "Entry"}, {"ts": "1699727423111", "date": "Sat Nov 11 18:29:42 2023\n", "id": "A1", "name": "Aby mathew", "status": "Entry"}
];

// Extract labels and data from JSON
const labels = jsonData.map(entry => entry.date);
const entryData = jsonData.map(entry => entry.status === "Entry" ? 1 : 0);
const exitData = jsonData.map(entry => entry.status === "Exit" ? 1 : 0);

// Create a bar chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Entry',
        data: entryData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Exit',
        data: exitData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});