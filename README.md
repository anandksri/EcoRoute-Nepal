# EcoRoute Nepal

EcoRoute Nepal is an AI-powered climate-smart navigation project designed to recommend routes in Kathmandu Valley using environmental and mobility-related data.

## About

The project combines route planning with factors such as:

- Air quality
- Carbon emissions
- Weather conditions
- Flood risk
- Travel time
- Health and safety considerations

The goal is to make route selection more useful than simply choosing the shortest path by considering environmental and real-world conditions.

## Project Structure

```text
backend/       Backend application, controllers, models, middleware, and configuration
```

The backend includes authentication, collection/report functionality, role-based middleware, and database integration.

## Security Note

Local environment files and generated dependencies should not be committed. The repository now ignores `.env` files and `node_modules`.

If credentials from a previously committed environment file were ever active, rotate them rather than relying only on removing the file from the current branch.

## Development

See `backend/README.md` and the backend package configuration for the current development workflow.

## Author

Anand Keshari
