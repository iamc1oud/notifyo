export class DBError extends Error {
  public constructor(message = 'Unknown database error') {
    super(message);
  }
}

export class DBConfigError extends DBError {
  public constructor(message = 'Database configuration error') {
    super(message);
  }
}
