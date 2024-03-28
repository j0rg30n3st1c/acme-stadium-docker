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

## Execution Instructions

1. Ensure Docker and Docker Compose are installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the project directory.
4. Run `docker-compose up` to build and bring up all the services.
5. Access the application through port 8080 in your browser.

## Additional Notes

- Ensure you have the necessary configuration files in the corresponding directories, such as `nginx.conf`, Java files, and Python scripts as needed.
- Also, make sure to have the necessary dependencies to run each service correctly.
