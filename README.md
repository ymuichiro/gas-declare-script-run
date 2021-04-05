# gas-declare-script-run

Complement "google.script.run" at develop in local.

# usage

```
import google from 'gas-declare-script-run';

google.script.run
  .withSuccessHandler(() => {})
  .withFailureHandler(() => {})
  .serverSideFunction();
```
