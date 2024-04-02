# acme-stadium-docker
A events stadium infrastructure implementation

This project involves a multi-service deployment using Docker Compose. It consists of several services for different functionalities related to a web application, including frontend, backend servers, messaging services, payment gateways, among others.

## Project Structure

The `docker-compose.yml` file defines all the services required for deployment. Below are the services included:

### Frontend

Service hosting the frontend web application.

### Nginx Proxy

The Nginx Proxy service routes incoming requests to different backend services based on their functionality:

- **Event Management**

- **Parking Reservation**

- **Ticket Sales**

### Match Alignments

Service running a Python script to manage match alignments.

### RabbitMQ

The RabbitMQ service acts as a message broker between the backend (Producer) and the API (Consumer) within the system.

### Producer

The Producer service, which is integrated with the backend, generates and sends messages to RabbitMQ.

### Consumer

The Consumer service, part of the API, processes messages received from RabbitMQ at a rate compatible with its processing capabilities.


### Download API, Email API, Wallet API, QR, Validation

Services running different Java applications for various functions of the application.

### Remaining Tickets, Match List, Remaining Tickets Map, Parking Map Remaining Sites, Parking Remaining Sites

Services running Python scripts for various functions of the application.

### Bizum API, PayPal API, Card API, Transfer API

Services providing different payment methods as part of a payment gateway.

### Certbot
Generates SSL/TLS certificates to enable secure HTTPS access via Nginx proxy,

### Database for Ticket Entries

The ticket entries database is responsible for storing information about ticket sales and related data for events hosted at our stadium.

The primary database for ticket entries is the main database where all ticket-related information is stored. In addition to the primary database, we maintain a slave database dedicated to backup  purposes. 

## Execution Instructions

1. Ensure [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) are installed on your system.
2. Ensure [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed on your system.
3. Type following commands:
```
git clone git@github.com:j0rg30n3st1c/acme-stadium-docker.git
cd acme-stadium-docker/
```
4. Run `docker-compose up` to build and bring up all the services.
5. Access the application through port 8080 in your browser: [https://localhost:8080/](https://localhost:8080/)

## Additional Notes

- Ensure you have the necessary configuration files in the corresponding directories, such as `nginx.conf`, Java files, and Python scripts as needed.
- Also, make sure to have the necessary dependencies to run each service correctly.
