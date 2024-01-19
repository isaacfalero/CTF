CREDENTIAL ROOM - LOCAL HOSTING INSTRUCTIONS




*Docker is Required*
Docker install guide: https://docs.docker.com/get-docker/




*All of these commands should be carried out in your terminal unless instructed otherwise*




GETTING STARTED
1. Clone *credential_room* directory from CTF GitHub repository:
   a) https://github.com/isaacfalero/CTFs/tree/main/credential_room
2. Once inside the *credential_room* directory on your localhost, deploy the Docker container: 
   a) docker compose -f docker-compose.yml up -d
   b) docker ps (confirms that the image is running)
3. In your browser, connect to http://localhost:8080.




CTF CHALLENGE
Flag Template: CCC_{flag}
Need the Solution? See "SOLUTION.txt"




SHUTTING DOWN
1. Run this command to stop and remove the container:
   a) docker compose -f docker-compose.yml down
