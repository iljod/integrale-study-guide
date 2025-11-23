# Toepassingen van Integralen

## Oppervlakte Berekeningen

### Tussen twee functies
Het oppervlak tussen f(x) en g(x) van a tot b:
```math
A = ∫_a^b [f(x) - g(x)] dx
```
waarbij f(x) ≥ g(x) op [a,b]

**Voorbeeld: Oppervlak tussen y = x² en y = 2x**

Vind snijpunten: x² = 2x → x² - 2x = 0 → x(x-2) = 0
Snijpunten bij x = 0 en x = 2

Bovenste functie: 2x
Onderste functie: x²

A = ∫₀² [2x - x²] dx = [x² - x³/3]₀² = 4 - 8/3 = 4/3

### Oppervlak onder de x-as
Als de functie onder de x-as ligt, neem je de absolute waarde:
```math
A = ∫_a^b |f(x)| dx
```

**Strategie:**
1. Vind nulpunten
2. Bepaal teken per interval
3. Integreer per interval
4. Tel positieve oppervlakken op

## Volume Berekeningen

### Schijfmethode
Rotatie om de x-as:
```math
V = π∫_a^b [f(x)]² dx
```

Rotatie om de y-as:
```math
V = π∫_c^d [f(y)]² dy
```

**Voorbeeld: Volume van paraboloïd**
Rotatie van y = √x om de x-as van x = 0 tot x = 4:
V = π∫₀⁴ (√x)² dx = π∫₀⁴ x dx = π[x²/2]₀⁴ = 8π

### Cilindermethode
Rotatie om de y-as:
```math
V = 2π∫_a^b x·f(x) dx
```

**Voorbeeld: Rotatie van y = x om de y-as van x = 0 tot x = 2:**
V = 2π∫₀² x·x dx = 2π∫₀² x² dx = 2π[x³/3]₀² = 16π/3

## Natuurkundige Toepassingen

### Werk (Work)
Werk = Kracht × Afstand
```math
W = ∫_a^b F(x) dx
```

**Voorbeeld: Veer**
Kracht op veer: F(x) = kx
Werk om veer uit te rekken van a tot b:
W = ∫_a^b kx dx = k[x²/2]_a^b

### Centrum van Massa
Voor een lamina met dichtheid ρ(x):
```math
x̄ = (1/A)∫_a^b x·ρ(x) dx
```

```math
ȳ = (1/2A)∫_a^b [f(x)]² dx
```

### Moment van Inertie
Rotatie om y-as:
```math
I_y = ∫_a^b x²·ρ(x) dx
```

## Economische Toepassingen

### Consumptiersurplus
CS = ∫₀^Q₀ [D(q) - P₀] dq

### Producentensurplus
PS = ∫₀^Q₀ [P₀ - S(q)] dq

**Voorbeeld: Lineaire vraag**
Vraag: P = 10 - q
Prijs: P₀ = 6
Hoeveelheid: Q₀ = 4

CS = ∫₀⁴ [(10 - q) - 6] dq = ∫₀⁴ (4 - q) dq = [4q - q²/2]₀⁴ = 8

## Waarschijnlijkheid

### Normale Verdeling
De kansdichtheid:
```math
f(x) = (1/σ√(2π)) · e^(-(x-μ)²/(2σ²))
```

### Verwachtingswaarde
```math
E[X] = ∫_{-∞}^∞ x·f(x) dx
```

## Praktische Voorbeelden

### 1. Waterdruk
Kracht op damwand: F = ∫_0^h ρ·g·y·w(y) dy

### 2. Elektrisch Veld
Potentiaalverschil: V = -∫ E·dr

### 3. Groeimodellen
Exponentiële groei: ∫₀^T k·P(t) dt

## Probleemoplossing Strategie

1. **Identificeer het probleemtype**
   - Oppervlakte, volume, werk, etc.

2. **Stel de juiste integraal op**
   - Gebruik de juiste formule
   - Bepaal de grenzen

3. **Los de integraal op**
   - Kies de juiste techniek
   - Wees precies met berekeningen

4. **Interpreteer het resultaat**
   - Geef antwoord in juiste eenheden
   - Controleer redelijkheid

## Controlepunten
- **Eenheden:** Zijn alle eenheden consistent?
- **Bereik:** Zijn de grenzen correct?
- **Teken:** Is de integraal positief waar nodig?
- **Realiteit:** Is het antwoord realistisch?

---
**Terug naar:** [[index|Hoofdpagina]]