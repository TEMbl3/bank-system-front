export default defineEventHandler((event) => {
  const { req, res } = event.node;

  // Проверяем путь запроса
  if (req.url?.startsWith('/socket.io')) {
    res.statusCode = 404;
    res.end('Socket.IO not used in this project');
  }
});