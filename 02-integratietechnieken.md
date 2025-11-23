# Integratietechnieken

## Substitutiemethode

De substitutiemethode is handig als je een functie en haar afgeleide in de integraal ziet.

### Algoritme

1. Kies u = binnenste functie
2. Bereken du/dx
3. Vervang dx door du/du/dx
4. Integreer met u
5. Vervang u terug

### Voorbeeld 1

```math
∫ 2x·(x² + 1)³ dx
```

Stap 1: u = x² + 1
Stap 2: du/dx = 2x → du = 2x dx
Stap 3: ∫ u³ du
Stap 4: u⁴/4 + C
Stap 5: (x² + 1)⁴/4 + C

### Voorbeeld 2 (Trigonometrische Substitutie)

```math
∫ sin(x)·cos²(x) dx
```

u = cos(x)
du/dx = -sin(x)
∫ sin(x)·cos²(x) dx = -∫ u² du = -u³/3 + C = -cos³(x)/3 + C

## Partiële Integratie

Gebaseerd op de productregel: ∫ u dv = uv - ∫ v du

### Wanneer gebruiken?

- Product van functies waarbij één makkelijk integreerbaar is
- Logaritmische functies
- Inverse trigonometrische functies

### Voorbeeld

```math
∫ x·e^x dx
```

u = x → du = dx
dv = e^x dx → v = e^x

∫ x·e^x dx = x·e^x - ∫ e^x dx = x·e^x - e^x + C = e^x(x - 1) + C

## Integreren van Rationale Functies

### Simpele Breuken

```math
∫ 1/(x+2) dx = ln|x+2| + C
```

### Complexe Breuken (Breuksplitsing)

```math
∫ 1/(x²-1) dx
```

Factoriseer: 1/(x²-1) = 1/((x-1)(x+1))

Breuksplitsing: A/(x-1) + B/(x+1)

Los op: 1 = A(x+1) + B(x-1)
x = 1 → 1 = 2A → A = 1/2
x = -1 → 1 = -2B → B = -1/2

Dus: ∫ [1/2·1/(x-1) - 1/2·1/(x+1)] dx
= 1/2·ln|x-1| - 1/2·ln|x+1| + C

## Speciale Technieken

### Complexe Completering

```math
∫ 1/(x² + 4x + 5) dx
```

Completeer het kwadraat:
x² + 4x + 5 = (x+2)² + 1

∫ 1/((x+2)² + 1) dx = arctan(x+2) + C

### Trigonometrische Identiteiten

Gebruik identiteiten zoals:

- sin²(x) = (1 - cos(2x))/2
- cos²(x) = (1 + cos(2x))/2
- sin(x)·cos(x) = sin(2x)/2

## Strategieën

1. **Kijk eerst naar substitutie** - herken je f(x) en f'(x)?
2. **Probeer partiële integratie** - zie je een product?
3. **Breuksplitsing voor rationale functies**
4. **Complexe completering** voor kwadratische noemers
5. **Trigonometrische identiteiten** voor sin/cos

## Geheugensteun

**LIATE-regel voor partiële integratie:**

- **L**ogaritmische functies (als u)
- **I**nverse trigonometrische functies (als u)
- **A**lgemene functies (als u)
- **T**rigonometrische functies (als u)
- **E**xponentiële functies (als u)

De functie die eerst in de lijst verschijnt, kies je als u.

---

**Volgende:** [[03-oefeningen|Oefeningen]]

