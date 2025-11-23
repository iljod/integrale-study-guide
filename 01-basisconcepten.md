# Basisconcepten van Integralen

## Wat is een Integrale?

Een integraal is het tegenovergestelde van differentiëren. Het vinden van een integraal wordt ook wel integreren genoemd.

### Primitieve Functie

Een functie F(x) heet een primitieve van f(x) als:

```math
F'(x) = f(x)
```

**Voorbeeld:**
Als f(x) = 2x, dan is F(x) = x² + C

### Constante van Integratie

Omdat de afgeleide van een constante 0 is, voegen we altijd een constante C toe:

```math
∫ f(x) dx = F(x) + C
```

## Bepaalde vs Onbepaalde Integralen

### Onbepaalde Integrale

```math
∫ f(x) dx = F(x) + C
```

- Geeft een familie van functies
- Resultaat bevat altijd +C

### Bepaalde Integrale

```math
∫_a^b f(x) dx = F(b) - F(a)
```

- Geeft een specifieke numerieke waarde
- Geen constante C nodig

## Basis Integratieregels

### Machten

```math
∫ x^n dx = x^(n+1)/(n+1) + C  (n ≠ -1)
```

### Constante

```math
∫ k dx = kx + C
```

### Som

```math
∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx
```

### Constante Voorvoegsel

```math
∫ k·f(x) dx = k·∫ f(x) dx
```

## Standaard Integralen

```math
∫ sin(x) dx = -cos(x) + C
```

```math
∫ cos(x) dx = sin(x) + C
```

```math
∫ e^x dx = e^x + C
```

```math
∫ 1/x dx = ln|x| + C
```

## Fundamentele Stelling van de Calculus

Als F(x) een primitieve is van f(x), dan:

```math
∫_a^b f(x) dx = F(b) - F(a)
```

## Belangrijke Concepten

- **Anti-afgeleide**: Een andere term voor primitieve functie
- **Differentaal**: Klein stukje van de x-as (dx)
- **Limiet**: Aanpakken van een waarde

## Veelvoorkomende Fouten

1. Vergeet niet de constante C toe te voegen
2. Controleer je antwoord door te differentiëren
3. Wees voorzichtig met absolute waarden bij ln

## Visualisatie

Een bepaalde integraal representeert het oppervlak onder de curve tussen x=a en x=b.

---

**Volgende:** [[02-integratietechnieken|Integratietechnieken]]

