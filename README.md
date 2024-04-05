# Acme Stadium
A events stadium infrastructure implementation

This project involves a multi-service deployment using Docker Compose. It consists of several services for different functionalities related to a web application, including frontend, backend servers, messaging services, payment gateways, among others.

## Project Structure

The `docker-compose.yml` file defines all the services required for deployment. Below are the services included:

### Frontend

Service hosting the frontend web application. This service permits communicate with different backend services based on their functionality:

- **Event Management**

- **Parking Reservation**

- **Ticket Sales**

### Nginx Proxy

The Nginx Proxy service routes incoming requests to frontend service.

### Match Alignments

Service running a Python script to manage match alignments.

### RabbitMQ

The RabbitMQ service acts as a message broker between the backend (Producer) and the API (Consumer) within the system.

### Producer

The Producer service, which is integrated with the backend, generates and sends messages to RabbitMQ related with ticket purchase requests.

### Consumer

The consumer service processes messages received from RabbitMQ at a rate compatible with its processing capabilities and makes use of payment APIs: bizum, transfer, etc.


### Download API, Email API, Wallet API, QR, Validation

Services running different Java applications for various functions of the application.

### Remaining Tickets, Match List, Remaining Tickets Map, Parking Map Remaining Sites, Parking Remaining Sites

Services running Python scripts for various functions of the application.

### Bizum API, PayPal API, Card API, Transfer API

Services providing different payment methods as part of a payment gateway.

### Cert Generator
Generates SSL/TLS certificates to enable secure HTTPS access via Nginx proxy. 
This service checks if the certificate already exists. If it does not exist, generate a new SSL certificate. This certificate is issued for a specific domain. If one already exists, check if the certificate will expire in less than a week. If so, renew the certificate.

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
4. Configure environment variables (Optional): Make sure to customize the .env file according to your desired configuration. Adjust the MySQL variables as needed to suit your application requirements. Use the provided .env file as a template.
5. Run `docker-compose up` to build and bring up all the services.
6. Access the application through port 8080 in your browser: [https://localhost:8080/](https://localhost:8080/)

## Additional Notes

- Ensure you have the necessary configuration files in the corresponding directories, such as `nginx.conf`, Java files, and Python scripts as needed.
- Also, make sure to have the necessary dependencies to run each service correctly.
