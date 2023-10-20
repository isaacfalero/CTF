SPOOKY CTF - LOCAL HOSTING




*Docker is Required*
Docker install guide: https://docs.docker.com/get-docker/


*All of these commands should be carried out in your terminal unless instructed otherwise*




GETTING STARTED
1. Clone Spooky directory from CTF GitHub repository:
   a) https://github.com/isaacfalero/CTFs/tree/main/Spooky 
2. Once inside the Spooky directory on your localhost, deploy the Docker container: 
   a) docker build -t spooky . (builds docker image, tagging it “spooky”, using all the assets 
      in the current directory)
   b) docker run -d -p 8081:80 spooky (deploys the Docker container and maps localhost port 8081 
      to container port 80)
   c) docker ps (confirms that the image is running)
3. In your browser, connect to http://localhost:8081.




CTF CHALLENGE
Flag Template: Hackoween_{flag}
Need a Hint? See "HINT.txt"
Need the Solution? See "SOLUTION.txt"




SHUTTING DOWN
1. Run “docker ps” and copy down the container ID of the “spooky” container:
   a) docker stop <containerID> (stops the container)
   b) docker rm <containerID> (removes the container)
2. Run “docker images” and copy down the image ID of the “spooky” image:
   a) docker rmi <imageID> (removes the image)
