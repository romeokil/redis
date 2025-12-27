we are implementing the redis using docker redis server and for visualization we have redis-stack(GUI) so we have also started that using the below docker command.
--> docker run -d --name my-redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

Fake api we used for testing -> https://jsonplaceholder.typicode.com/todos

Result--> Yes we are able to see in Postman that our response time is literally improved , if we are not using redis it took approximately 55ms after getting fetched for first time.
But after redis cache it is only 7ms which is drastic change.

Things to remember->

1.We first need to start our docker redis server.
2. Then we need to make redis client which will talk to redis server.
3.after initializing the redis client , we import in index.js and client have some properties like
  3.1 -> client.get for getting the response
  3.2 -> client.set for settting the data
  3.3 -> client.expire to expire the existing data because their storage is small , and suppose we want to cache any other data so we need to delete the previous available data.
