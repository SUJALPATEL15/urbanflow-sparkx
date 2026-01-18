from passlib.context import CryptContext
import sys

try:
    print("Init CryptContext...", flush=True)
    pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
    password = "#ssmh209"
    print(f"Hashing: '{password}' (Type: {type(password)}, Length: {len(password)})", flush=True)
    hashed = pwd_context.hash(password)
    print(f"Hashed: {hashed}", flush=True)
    print("Success!", flush=True)
except Exception as e:
    print(f"FAIL: {e}", flush=True)
    import traceback
    traceback.print_exc()
