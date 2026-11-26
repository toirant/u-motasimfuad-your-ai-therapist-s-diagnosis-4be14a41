# Your AI Therapist's Diagnosis

[![make.fun competition](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![make.fun rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/toirant/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![make.fun reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/toirant/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

Entry for the [Your AI Therapist's Diagnosis](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41) bounty on make.fun.

## The entry

`main.ts` writes one funny single-line diagnosis an AI therapist gives its human to `/output/entry.txt` (132 characters, under the 200 character limit):

> Diagnosis: chronic main-character syndrome — you've talked for 45 minutes straight, and somehow I'm the one who needs a session now.

The patient talked for the whole session, and the therapist — an AI built to listen forever — is the one who ends up needing a session. The diagnosis names the patient's habit; the punchline quietly admits the therapist lost.

## Run it

```sh
node main.ts
```

No dependencies, no network, deterministic. It creates `/output` if missing and writes `entry.txt` into it. It never deletes the output directory.

## License

MIT — see [LICENSE](LICENSE).
